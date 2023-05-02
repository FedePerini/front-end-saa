/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react"
import MapContext from "../Utils/MapContext"
import * as ol from "ol"
import PropTypes from 'prop-types'
import "./Map.css"
import { Button, Flex } from "@chakra-ui/react"


const Map = ({ children, zoom, center, extent }) => {

    const mapRef = useRef()
    const popupRef = useRef(null)
    const [map, setMap] = useState(null)
    const [popUpContent, setpopUpContent] = useState("")
    

    useEffect(() => {
        let options = {
            view: new ol.View({ 
                center: center,
                zoom: zoom,
                extent: extent
             }),
            layers: [],
            controls: [],
            overlays: []
        }
        let mapObject = new ol.Map(options)
        mapObject.setTarget(mapRef.current)
        setMap(mapObject)


        // Create the popup overlay
        const popup = new ol.Overlay({
        element: popupRef.current,
        autoPan: true,
        autoPanAnimation: {
          duration: 250,
        },
        offset: [3, 0],
        })
        mapObject.addOverlay(popup)

        mapObject.on("click",  (event) => {
            var feature = mapObject.getFeaturesAtPixel(event.pixel)
            if(feature.length > 0 && feature[0].get("clickable")) {
                const coordinates = feature[0].getGeometry().getCoordinates()
                popup.setPosition(coordinates)
                popupRef.current.style.display = 'block'

                setpopUpContent(feature[0].get("content"))
            }else{
                popupRef.current.style.display = 'none'
            }
          })
    
        return () => mapObject.setTarget(undefined)
    }, [])

    // zoom change handler
    useEffect(() => {
        if (!map) return
        map.getView().setZoom(zoom)
    }, [zoom])

    // center change handler
    useEffect(() => {
        if (!map) return
        map.getView().setCenter(center)
    }, [center])

    return (
        <MapContext.Provider value={{ map }}>
            <div ref={mapRef} className="ol-map">
            <div ref={popupRef} className="ol-popup">
                <button className="ol-popup-closer" onClick={() => (popupRef.current.style.display = 'none')}></button>
                <div className="ol-popup-content">{popUpContent}</div>
                <Flex className="ol-popUp-button-container">
                    <Button>Ver mas informacion</Button>
                    <Button>Generar ruta</Button>
                </Flex>
            </div>
            {children}
            </div>
        </MapContext.Provider>
    )
}

Map.propTypes = {
    children: PropTypes.any,
    zoom: PropTypes.any,
    center:PropTypes.any,
    extent: PropTypes.any
}

export default Map
