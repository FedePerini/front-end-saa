/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
import { fromLonLat } from "ol/proj"
import * as ol from "ol"
import polyline from 'polyline-encoded'
import { routeService } from "../Service/RouteService"
import { LineString } from "ol/geom"

class RouteManager {

    async generateRoute(sourceLayer){

        this.deleteRoute(sourceLayer)

        const route = await routeService.getRoute()
        const coordinates = []
        route.forEach((it) => {
            coordinates.push(polyline.decode(it.geometry).map(coords => [coords[1], coords[0]]))
        }) 
        
        var routePoints = []
        for (var i = 0; i < coordinates.flat().length; i++) {
          var coord = fromLonLat(coordinates.flat()[i])
          routePoints.push(coord)
        }

        var routeFeature = new ol.Feature({
            geometry: new LineString(routePoints),
            name: "route"
            
         })

        sourceLayer.addFeature(routeFeature)
         
        document.getElementById("deleteRoute").style.display = 'flex'
    }

    deleteRoute(sourceLayer){
        const feature = sourceLayer.getFeatures().filter( (it) => { return it.get("name") == "route" } )

        if(this.existsRoute(sourceLayer)){
            feature.forEach( (it) => { sourceLayer.removeFeature(it) } )
            document.getElementById("deleteRoute").style.display = 'none'
        }
    }

    existsRoute(sourceLayer){
        return sourceLayer.getFeatures().filter( (it) => { return it.get("name") == "route" } ).length > 0
    }

}

export const routeManager = new RouteManager()