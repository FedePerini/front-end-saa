/* eslint-disable no-unused-vars */
import { Box, Button, Flex, Text, Toast, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FormInput from '../Molecules/FormInput'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../Atoms/CustomButton'
import { UserCredentials } from '../Domain/UserCredentials'
import "./LoginCard.css"
import { getErrorMessage, validateVarious } from '../Domain/Utils'
import { adminService } from '../Service/AdminService'


export const LoginCard = () => {

    const [userCredentials,setUserCredentials] = useState(new UserCredentials())
    const [clickFlag, setClickFlag] = useState(false)
    const navigate = useNavigate()
    const toast = useToast()

    const update = (reference,value) => {
        userCredentials[reference] = value
        setUserCredentials({...userCredentials})
    }

    const handleUsernameChange = (username) => {
        update("usuario",username.target.value)
    }

    const handlePasswordChange = (password) => {
        update("contrasenia",password.target.value)
    }

    const logInFunction = async () => {
        setClickFlag(true)

        if(validateVarious([!usernameCondition,!passwordCondition])) {
            try{
                const userId = await adminService.login(userCredentials)
                navigate("/",{state:{id: userId}})
            }catch(error){
                toast({
                    title: 'Error',
                    description: getErrorMessage(error),
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
            }
        }

    }
    

    const usernameCondition = userCredentials.usuario === ""

    const passwordCondition = userCredentials.contrasenia === ""

    return (

        <Flex className='loginCard'>
            <Box className='cardDecoration'></Box>
            <Flex className='loginForm'>
                <Flex className='title-wrapper'>
                    <Text className='login-title'>Ingresar</Text>
                </Flex>
                <FormInput state={userCredentials.usuario} handleChange={handleUsernameChange} errorCondition={usernameCondition && clickFlag} dataTestIdErrorText={"errorUsername"} dataTestId={"username"} label={"Usuario"} helperText={"Ingrese su nombre de usuario."} errorText={"Por favor Ingrese su DNI"} />
                <FormInput state={userCredentials.contrasenia} handleChange={handlePasswordChange} errorCondition={passwordCondition && clickFlag} dataTestIdErrorText={"errorPassword"} dataTestId={"password"} type={"password"} label={"Contraseña"} helperText={"Ingrese su Contraseña"} errorText={"Por favor ingrese su Contraseña"} />
                <CustomButton dataTestId={"loginButton"} onClick={logInFunction} extraClassName={"loginButton"} label={"Ingresar"}></CustomButton>
            </Flex>

            <Box className='cardDecoration'></Box>
        </Flex>

    )

}


