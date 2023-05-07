/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { AspectRatio, Box, Button, Flex, Grid,Text } from '@chakra-ui/react'
import { Header } from '../Organisms/Header'
import ClassroomCard from '../Molecules/ClassroomCard'
import { TornaviasSVG } from '../SVG/TornaviasSVG'
import SideBar from '../Molecules/SideBar'
import "./BuildingPage.css"
import { InfoCard } from '../Organisms/InfoCard'
import { Tornavias1P } from '../SVG/Tornavias1P'
import { TornaviasSubSuelo } from '../SVG/TornaviasSubSuelo'
import { FloorSelector } from '../Molecules/FloorSelector'

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


    return (
        <Flex className='pageContainer'>
            <Header></Header>

            <Flex className='mainSection'>
                <SideBar></SideBar>

                    <>
                        <FloorSelector maxValue={1} minValue={-1} floorNumber={level} increaseFunc={increaseFloor} decreaseFunc={decreaseFloor}></FloorSelector>
                        {(level == 0) && <TornaviasSVG showCardFunc={showCard}></TornaviasSVG>}
                        {(level == 1) && <Tornavias1P showCardFunc={showCard}></Tornavias1P>}
                        {(level == -1) && <TornaviasSubSuelo showCardFunc={showCard}></TornaviasSubSuelo>}
                    </>
            </Flex>
            
            <InfoCard isOn={active} closeCardFunc={closeCard}></InfoCard>
        </Flex>
    )

}
