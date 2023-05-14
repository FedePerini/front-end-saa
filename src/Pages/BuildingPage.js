/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { AspectRatio, Box, Button, Flex, Grid,Text } from '@chakra-ui/react'
import { Header } from '../Organisms/Header'
import ClassroomCard from '../Molecules/ClassroomCard'
import { TornaviasPB } from '../SVG/TornaviasPB'
import SideBar from '../Molecules/SideBar'
import { InfoCard } from '../Organisms/InfoCard'
import { SVGMaps } from '../Utils/SVGMapsStruct'
import "./BuildingPage.css"
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { buildingService } from '../Service/BuildingService'
import { BuildingMap } from '../Organisms/BuildingMap'

export const BuildingPage = () => {

    const [active,setActive] = useState(false)
    const [level, setLevel] = useState(0)
    const [building, setBuilding] = useState({})
    const [infoCardContent,setInfoCardContent] = useState({})
    const { id } = useParams()
    

    useEffect(() => {
        getBuilding(id)
    },[])

    const getBuilding = async() => {
        const aux = await buildingService.getBuildingById(id)
        setBuilding(aux)
    }

    const showCard = () =>{
        setActive(true)
    }

    const closeCard = () =>{
        setActive(false)
    }

    const increaseFloor = () => {
        setLevel(level + 1)
    }

    const decreaseFloor = () => {
        setLevel(level - 1)
    }

    return (
        <Flex className='pageContainer'>
            <Header></Header>

            <Flex className='mainSection'>
                <SideBar></SideBar>

                {(building.nombreSVG) && <BuildingMap setCardFunc={setInfoCardContent} SVGName={building.nombreSVG} showCardFunc={showCard} floorNumber={level} increaseFunc={increaseFloor} decreaseFunc={decreaseFloor}></BuildingMap>}
                {(!building.nombreSVG) && <div> Cargando mapas... </div>}
            </Flex>
            
            <InfoCard isOn={active} closeCardFunc={closeCard}></InfoCard>
        </Flex>
    )

}
