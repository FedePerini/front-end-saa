/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
import { useContext, useEffect, useRef, useState } from "react"
import { Button, Flex } from "@chakra-ui/react"
import MapContext from "../Utils/MapContext"
import * as ol from "ol"
import { routeService } from "../Service/RouteService"
import Style from 'ol/style/Style'
import Stroke from 'ol/style/Stroke'
import { fromLonLat } from "ol/proj"
import { LineString } from "ol/geom"
import polyline from 'polyline-encoded'

import "./MapInteractivity.css"

export const MapInteractivity = () =>{

    const { map } = useContext(MapContext)
    const [popUpContent, setpopUpContent] = useState("")
    const [popUpNavigate, setpopUpNavigate] = useState(() => {})
    const [popUpCoordinates, setPopUpCoordinates] = useState("")
    const popupRef = useRef(null)

    useEffect(()=> {
        if(!map) return

        // Create the popup overlay
        const popup = new ol.Overlay({
            element: popupRef.current,
            autoPan: true,
            autoPanAnimation: {
                duration: 250,
            },
            offset: [3, 0],
            })

        map.addOverlay(popup)

        map.on("click",  (event) => {
            var feature = map.getFeaturesAtPixel(event.pixel)
            if(feature.length > 0 && feature[0].get("clickable")) {
                const coordinates = feature[0].getGeometry().getCoordinates()
                popup.setPosition(coordinates)
                popupRef.current.style.display = 'block'

                setpopUpContent(feature[0].get("content"))
                setpopUpNavigate(() => feature[0].get("navigate"))
                setPopUpCoordinates(coordinates)
            }else{
                popupRef.current.style.display = 'none'
            }
        })
        
    },[map])

    const generateRoute = async () => {
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
            geometry: new LineString(routePoints)
         })
         map.getAllLayers()[1].getSource().addFeature(routeFeature)
        }

    return(
        <div ref={popupRef} className="ol-popup">
            <button className="ol-popup-closer" onClick={() => (popupRef.current.style.display = 'none')}></button>
            <div className="ol-popup-content">{popUpContent}</div>
            <Flex className="ol-popUp-button-container">
                <Button onClick={popUpNavigate}>Ver mas informacion</Button>
                <Button onClick={generateRoute}>Generar ruta</Button>
            </Flex>
        </div>
    )
}