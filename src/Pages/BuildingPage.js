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

export const BuildingPage = () => {

    const [active,setActive] = useState(false)
    const [level, setLevel] = useState(0)

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

    const Maps = SVGMaps["tornavias"]

    return (
        <Flex className='pageContainer'>
            <Header></Header>

            <Flex className='mainSection'>
                <SideBar></SideBar>

                <Maps showCardFunc={showCard} floorNumber={level} increaseFunc={increaseFloor} decreaseFunc={decreaseFloor}></Maps>

            </Flex>
            
            <InfoCard isOn={active} closeCardFunc={closeCard}></InfoCard>
        </Flex>
    )

}
