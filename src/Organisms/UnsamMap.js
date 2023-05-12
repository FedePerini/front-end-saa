/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import * as olSource from "ol/source"
import Map from './Map'
import Layers from '../Layers/Layers'
import TileLayer from '../Layers/TileLayer'
import Controls from '../Controls/Controls'
import { boundingExtent } from "ol/extent"
import { fromLonLat, get, transformExtent } from "ol/proj"
import VectorLayer from '../Layers/VectorLayer'
import VectorSource from 'ol/source/Vector'
import { Feature } from 'ol'
import { Point } from 'ol/geom'
import Style from 'ol/style/Style'
import Icon from 'ol/style/Icon'
import { useNavigate } from 'react-router-dom'
import { MapInteractivity } from '../Molecules/MapInteractivity'
import { buildingService } from '../Service/BuildingService'

import "./UnsamMap.css"
import { SubjectSearch } from './SubjectSearch'

export const UnsamMap = () => {


  const tornavias = [-58.5263602, -34.5786899]
  const aulario = [-58.519561, -34.581773]
  const cienciasSociales = [-58.521703,-34.581572]

  const tornaviasWebMercator = fromLonLat(tornavias)
  const aularioWebMercator = fromLonLat(aulario)
  const cienciasSocialesWebMercator = fromLonLat(cienciasSociales)

  const [center, setCenter] = useState([0,0])
  const [zoom, setZoom] = useState(9)
  const [vectorSource, setVectorSource] = useState(new VectorSource())
  const [buildings,setBuildings] = useState([])

  const limiteSuperior = [-58.5300722,-34.5764979]
  const limiteInferior = [-58.514110,-34.583700]
  
  const navigate = useNavigate()

  var ext = boundingExtent([limiteSuperior,limiteInferior])
  ext =  transformExtent(ext, get('EPSG:4326'), get('EPSG:3857'))

  useEffect(() => {
    getBuildings()
  },[])

//########################################################################

  const getBuildings = async () => {
      const aux = await buildingService.getAllBuildings()
      setBuildings(aux)
      loadFeatures(aux)
  }

  const convertToPoint = (building) => {
    return {
      id: building.id,
      coords: fromLonLat([building.coordenadasX,building.coordenadasY]),
      nombre: building.nombre,
      content: "Edificio: " + building.nombre,
      navigate: function(){navigate("/building/"+ building.id)}
    }
  }

  const loadFeatures = (buildings) =>{

    var markerStyle = new Style({
      image: new Icon({
        src: require('../Images/Dot.png'),
        color: 'transparent',
        crossOrigin: 'anonymous',
        scale: 0.1
      })
    })

    buildings.forEach( building =>{

      const point = convertToPoint(building)
      var feature = new Feature({
        id: point.id,
        geometry: new Point(point.coords),
        name: point.nombre,
        clickable: true,
        content: point.content,
        navigate: point.navigate
      })

      feature.setStyle(markerStyle)

      vectorSource.addFeature(feature)
      })
  }

//########################################################################

return (
    <div className='mapContainer'>
      <Map center={center} zoom={zoom} extent={ext}>
          <MapInteractivity/>
          <Layers>
              <TileLayer source={new olSource.OSM()}></TileLayer>
              <VectorLayer source={vectorSource}></VectorLayer>
          </Layers>
          <Controls>
            <SubjectSearch/>
          </Controls>
      </Map>
    </div>
)}

export default UnsamMap