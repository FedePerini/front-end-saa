/* eslint-disable no-unused-vars */
import { Button, Flex, Text } from '@chakra-ui/react'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import React, { useState } from 'react'
import "./SideBar.css"
import ClassroomCard from './ClassroomCard'


export const SideBar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    return(
        <>
            <Button onClick={showSidebar} className="sideBar-button"> <FaChevronRight/></Button>
            <Flex className={sidebar ? 'sideBar active' : 'sideBar'}>
                <Flex className='titleContainer'>
                    <Text className='title'>Aulas</Text>
                    <Button className='closeButton' onClick={showSidebar}><FaChevronLeft/></Button>
                </Flex>

                <Flex className='classroomContainer'>
                        <ClassroomCard></ClassroomCard>
                        <ClassroomCard></ClassroomCard>
                        <ClassroomCard></ClassroomCard>
                        <ClassroomCard></ClassroomCard>
                        <ClassroomCard></ClassroomCard>
                        <ClassroomCard></ClassroomCard>
                </Flex>
                
            </Flex>
        </>

    )

}

export default SideBar