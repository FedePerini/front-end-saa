/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import ImageLayer from 'ol/layer/Image'
import Static from 'ol/source/ImageStatic'

const ImageMap = () => {
  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new ImageLayer({
          source: new Static({
            url: require("../Images/Dot.png"),
            projection: 'EPSG:3857',
            imageExtent: [-100, -100, 100, 100], // set the extent of the image
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    })
  }, [])

  return <div id="map" className='mapContainer'></div>
}

export default ImageMap