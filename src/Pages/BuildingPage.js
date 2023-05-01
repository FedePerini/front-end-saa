/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { AspectRatio, Flex, Grid,Text } from '@chakra-ui/react'
import { Header } from '../Organisms/Header'
import ClassroomCard from '../Molecules/ClassroomCard'
import { TornaviasSVG } from '../SVG/TornaviasSVG'
import SideBar from '../Molecules/SideBar'
import "./BuildingPage.css"
import { InfoCard } from '../Organisms/InfoCard'

export const BuildingPage = () => {

    const [active,setActive] = useState(false)

    const showCard = () =>{
        setActive(true)
    }

    const closeCard = () =>{
        setActive(false)
    }

    return (
        <Flex className='pageContainer'>
            <Header></Header>

            <Flex className='mainSection'>
                <SideBar></SideBar>

                <TornaviasSVG showCardFunc={showCard}></TornaviasSVG>
            </Flex>
            
            <InfoCard isOn={active} closeCardFunc={closeCard}></InfoCard>
        </Flex>
    )

}
