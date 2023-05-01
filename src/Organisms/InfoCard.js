/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { Button, Flex,Text } from '@chakra-ui/react'
import ClassroomCard from '../Molecules/ClassroomCard'
import { ClassroomSubject } from '../Molecules/ClassroomSubject'
import "./InfoCard.css"
import { useNavigate } from 'react-router-dom'

export const InfoCard = (props) => {
    
    const navigate = useNavigate()

    const goToClassroomPage = () => {
        navigate("/classroom")
    }

    return (
        <Flex className={props.isOn ? 'infoCard active' : 'infoCard'}>
            
            <Flex className='close-button-wrapper'>
                <Button className='close-button' onClick={props.closeCardFunc}><FaChevronRight/></Button>
                <Text className='infoCardTitle'>Aula 1</Text>
            </Flex>

            <Flex className='classroomInfoContainer'>
                <ClassroomSubject></ClassroomSubject>
            </Flex>

            <Button onClick={goToClassroomPage}>Ver Informacion</Button>
        </Flex>
    )

}

InfoCard.propTypes = {
    isOn: PropTypes.bool,
    closeCardFunc: PropTypes.func
}