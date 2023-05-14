/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-useless-return */
import React from 'react'
import { Flex,Button } from "@chakra-ui/react"
import { routeManager } from '../Domain/RouteManager'
import MapContext from '../Utils/MapContext'
import { useContext } from 'react'
import "./DeleteRouteCard.css"
import { useEffect } from 'react'
import { useState } from 'react'


export const DeleteRouteCard = () => {

    const { map } = useContext(MapContext)

    useEffect(()=> {
        if(!map) return

    },[map])

    const deleteRoute = () => {
        routeManager.deleteRoute(map.getAllLayers()[1].getSource())
    }

    return(
        <>
            <div id='deleteRoute' className='deleteRouteCard'><Button onClick={deleteRoute}>Borrar Ruta</Button> </div>
        </>
    )

}