/* eslint-disable no-unused-vars */
import React from 'react'
import { AspectRatio, Flex, Grid,Text } from '@chakra-ui/react'
import { Header } from '../Organisms/Header'
import ClassroomCard from '../Molecules/ClassroomCard'
import { TornaviasSVG } from '../SVG/TornaviasSVG'
import "./BuildingPage.css"
import SideBar from '../Molecules/SideBar'

export const BuildingPage = () => {

    return (
        <Flex className='pageContainer'>
            <Header></Header>

            <Flex className='mainSection'>
                <SideBar></SideBar>

                <Flex className='SVGContainer'>
                    <TornaviasSVG></TornaviasSVG>
                </Flex>
            </Flex>
            

        </Flex>
    )

}


/*
.sideBar{
    background-color: var(--brightMainColor);
    width: 100%;
    height: 100%;
    border-color: black;
    border-style: solid;
    border-width: 0 0 0 2px;
    flex-direction: column;
    align-items: center;
}

.sideBar-title{
    font-size: 40px;
}

.sideBar-content{
    margin-top: 20px;
    gap: 10px;
    flex-direction: column;
    width: 90%;
    overflow-y: auto;
    height: 800px;
}

*/