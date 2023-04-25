/* eslint-disable no-unused-vars */
import { Flex,Text } from '@chakra-ui/react'
import React from 'react'
import "./ClassroomCard.css"

export const ClassroomCard = () => {
    return(
        <Flex className='cardAula'>
            <Text className='tituloCard'>Aula: 1</Text>
            <Text className='contenidoCard'>Actualmente Cursado: Matematica 3</Text>
            <Text className='contenidoCard'>Profesor: Jose Perez</Text>
            <Flex className='containerHoras'>
                <Text className='contenidoCard'>Desde: 16:00</Text>
                <Text className='contenidoCard'>Hasta: 20:00</Text>
            </Flex>
        </Flex>
    )
}

export default ClassroomCard