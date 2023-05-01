/* eslint-disable no-unused-vars */
import React from 'react'
import { Flex, Text } from "@chakra-ui/react"
import PropTypes from 'prop-types'
import "./ClassroomSubject.css"

export const ClassroomSubject = () => {

    return (
        <Flex className='subjectCard'>
            <Text className='infoSection'> <b>Materia:</b> Matematica 3 </Text>
            <Text className='infoSection'> <b>Profesor:</b> Jose Perez </Text>
            <Text className='infoSection'> <b>Horario:</b> 16:00 Hs - 20:00 Hs </Text>
        </Flex>
    )

}

export default ClassroomSubject

ClassroomSubject.propTypes = {
    materia: PropTypes.string,
    profesor: PropTypes.string,
    inicio: PropTypes.string,
    fin: PropTypes.string,
}