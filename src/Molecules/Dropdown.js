/* eslint-disable no-unused-vars */
import React from 'react'
import {Menu,MenuButton,MenuList,MenuItem,Box,Flex,Text} from '@chakra-ui/react'
import { FaBars,FaWrench,FaSignOutAlt,FaUser,FaMapMarkedAlt } from "react-icons/fa"
import { useLocation, useNavigate } from 'react-router-dom'
import "./Dropdown.css"

export const Dropdown = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const navigateToMain = () => {

        if(location.state){
            navigate("/",{state: location.state})
        }else{
            navigate("/")
        }
    }

    const navigateToLogin = () => {
        navigate("/login")
    }

    const navigateToSettings=() => {
        navigate("/settings",{state: location.state})
    }


    return (
        <>
        <Menu>
            <MenuButton className="dropdown"> <FaBars className='icon'></FaBars> </MenuButton>
            <MenuList className='dropdownList'>
                <MenuItem onClick={navigateToMain} className='dropdownItem'>Mapa <FaMapMarkedAlt className='icon'></FaMapMarkedAlt></MenuItem>
                {(!location.state) && <MenuItem onClick={navigateToLogin} className='dropdownItem'> Ingresar <FaUser className='icon'></FaUser></MenuItem>}
                {(location.state) && <MenuItem onClick={navigateToMain} className='dropdownItem'> Cerrar Sesion <FaSignOutAlt className='icon'></FaSignOutAlt></MenuItem>}
                {(location.state) && <MenuItem onClick={navigateToSettings} className='dropdownItem'> Opciones <FaWrench className='icon'></FaWrench></MenuItem>}
            </MenuList>
        </Menu>
        </>
    )
}

export default Dropdown