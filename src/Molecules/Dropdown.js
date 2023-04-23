/* eslint-disable no-unused-vars */
import React from 'react'
import {Menu,MenuButton,MenuList,MenuItem,Box,Flex,Text} from '@chakra-ui/react'
import { FaBars,FaHome,FaSignOutAlt,FaUser,FaMapMarkedAlt } from "react-icons/fa"
import { useLocation, useNavigate } from 'react-router-dom'
import "./Dropdown.css"

export const Dropdown = () => {

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
        <Menu>
            <MenuButton className="dropdown"> <FaBars className='icon'></FaBars> </MenuButton>
            <MenuList className='dropdownList'>
                <MenuItem className='dropdownItem'>Mapa <FaMapMarkedAlt className='icon'></FaMapMarkedAlt></MenuItem>
                <MenuItem className='dropdownItem'>Cerrar Sesion <FaSignOutAlt className='icon'></FaSignOutAlt></MenuItem>
            </MenuList>
        </Menu>
        </>
    )
}

export default Dropdown