/* eslint-disable no-unused-vars */
import React from 'react'
import { Flex, Text,Box, Button } from '@chakra-ui/react'
import { Header } from '../Organisms/Header'
import SubHeader from '../Atoms/SubHeader'
import { ClassroomSubject } from '../Molecules/ClassroomSubject'
import "./ClassroomPage.css"
import { Calendar } from '../Organisms/Calendar'

export const ClassroomPage = () => {

    return (
        <Flex className='pageContainer'>
            <Header></Header>
            <SubHeader urlImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAGy7UNGNsc_U9rfL-szb-8p0W5MvVvVPdQ&usqp=CAU"} label={"AULA 1"}></SubHeader>

            <Flex className='classroomInfo'>
                <Box>
                    <Text className='infoTitle'> Actualmente Cursando: </Text>
                    <ClassroomSubject></ClassroomSubject>
                </Box>

                <Box>
                    <Text className='infoTitle'> Siguiente Materia: </Text>
                    <ClassroomSubject></ClassroomSubject>
                </Box>
            </Flex>

            

        </Flex>
    )

}