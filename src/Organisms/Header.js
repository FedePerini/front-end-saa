/* eslint-disable no-unused-vars */
import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import Dropdown from '../Molecules/Dropdown'

import "./Header.css"

export const Header = () => {

    return (
        <Flex className='header'>
            <Text>TEXTO DE PRUEBA</Text>
            <Dropdown></Dropdown>
        </Flex>
    )

}