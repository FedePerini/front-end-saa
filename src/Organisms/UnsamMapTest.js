/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
import React, { createContext, useEffect, useState } from 'react'
import { Button, Text } from '@chakra-ui/react'
import * as olSource from "ol/source"
import Map from './Map'
import Layers from '../Layers/Layers'
import TileLayer from '../Layers/TileLayer'
import Controls from '../Controls/Controls'
import FullScreenControl from '../Controls/FullScreenControl'
import { boundingExtent } from "ol/extent"
import { fromLonLat, get, transformExtent } from "ol/proj"
import { routeService } from '../Service/RouteService'
import VectorLayer from '../Layers/VectorLayer'
import VectorSource from 'ol/source/Vector'
import { Feature } from 'ol'
import { LineString, Point, Circle } from 'ol/geom'
import Style from 'ol/style/Style'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import Popup from 'ol/Overlay'

import "./UnsamMap.css"
import Icon from 'ol/style/Icon'

export const UnsamMapTest = () => {


  const tornavias = [-58.5263602, -34.5786899]
  const aulario = [-58.519561, -34.581773]
  const cienciasSociales = [-58.521703,-34.581572]

  const tornaviasWebMercator = fromLonLat(tornavias)
  const aularioWebMercator = fromLonLat(aulario)
  const cienciasSocialesWebMercator = fromLonLat(cienciasSociales)

  const [center, setCenter] = useState([0,0])
  const [zoom, setZoom] = useState(9)
  const [vectorSource, setVectorSource] = useState(new VectorSource())

  const limiteSuperior = [-58.5300722,-34.5764979]
  const limiteInferior = [-58.514110,-34.583700]

  var ext = boundingExtent([limiteSuperior,limiteInferior])
  ext =  transformExtent(ext, get('EPSG:4326'), get('EPSG:3857'))

  useEffect(() => {
    loadFeatures()
  },[])

//########################################################################

const points = [
    {
      coords: tornaviasWebMercator,
      name: 'Point A',
      content: "Tornavias",
    },
    {
      coords: aularioWebMercator,
      name: 'Point B',
      content: "Aulario",
    },
    {
      coords: cienciasSocialesWebMercator,
      name: 'Point C',
      content: "Edificio de ciencias sociales",
    }
  ]


  const loadFeatures = () =>{

    var markerStyle = new Style({
      image: new Icon({
        src: require('../Images/Dot.png'),
        color: 'transparent',
        crossOrigin: 'anonymous',
        scale: 0.1
      })
    })

    points.forEach( point =>{

      var feature = new Feature({
        geometry: new Point(point.coords),
        name: point.name,
        clickable: true,
        content: point.content,
      })

      feature.setStyle(markerStyle)

      vectorSource.addFeature(feature)
      })
  }

//########################################################################

  const generateRoute = async () => {
      const routeCoordinates = await routeService.getRoute()

      var routePoints = []
      for (var i = 0; i < routeCoordinates.length; i++) {
        var coord = fromLonLat(routeCoordinates[i])
        routePoints.push(coord)
      }
      var routeFeature = new Feature({
         geometry: new LineString(routePoints)
      })
      vectorSource.addFeature(routeFeature)
  }

return (
    <div className='mapContainer'>
    <Map center={center} zoom={zoom} extent={ext}>
        <Layers>
            <TileLayer source={new olSource.OSM()}></TileLayer>
            <VectorLayer source={vectorSource}></VectorLayer>
        </Layers>
        <Controls>
        </Controls>
    </Map>
    </div>
)}

export default UnsamMapTest