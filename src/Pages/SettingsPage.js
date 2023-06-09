/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Button, Divider, Flex,Text } from "@chakra-ui/react"
import { Header } from '../Organisms/Header'
import SubHeader from '../Atoms/SubHeader'
import { FaChalkboardTeacher, FaKey, FaPencilRuler, FaTrashAlt } from "react-icons/fa"
import { useState } from 'react'
import CustomButton from '../Atoms/CustomButton'
import "./SettingsPage.css"
import { SubjectOption } from '../Molecules/SubjectOption'

export const SettingsPage = () => {

    const [option, setOption] = useState(0)

    return (
        <Flex className='pageContainer'>
            <Header></Header>
            <Flex className='settingsMenuContainer'>
                <Flex className='settingsMenu'>
                    <Flex className='settingsMenuSelectorContainer'>
                        <Flex className='settingsMenuSelector'>

                            <button onClick={() => { setOption(0)}} className='settingsMenuButton'> <FaChalkboardTeacher/> Profesores </button>
                            <button onClick={() => { setOption(1)}} className='settingsMenuButton'> <FaKey/> Cuentas administrador </button>
                            <button onClick={() => { setOption(2)}} className='settingsMenuButton'> <FaPencilRuler/> Materias </button>
                            <Divider className='settingsDivider' borderWidth={1} orientation='horizontal'></Divider>
                            <button onClick={() => { setOption(3)}} className='settingsMenuButton settingsMenuButtonDelete'> <FaTrashAlt/> Desasignacion general </button>

                        </Flex>
                        <Divider className='settingsDivider' borderWidth={1} orientation='vertical'></Divider>
                    </Flex>  

                    {(option == 0) &&  
                    <Flex className='settingsMenuContent'>
                        <Text className='selectionTitle'>Profesores</Text>
                        <Flex className='settingsMenuContentOptions'>
                            <></>
                        </Flex>
                    </Flex> }
                    
                    {(option == 1) &&  
                    <Flex className='settingsMenuContent'>
                        <Text className='selectionTitle'>Cuentas administrador</Text>
                        <Flex className='settingsMenuContentOptions'>
                            <></>
                        </Flex>
                    </Flex> }

                    {(option == 2) && 
                    <>
                        <SubjectOption></SubjectOption>
                    </>
                    
                    
                    }

                    {(option == 3) &&  
                    <Flex className='settingsMenuContent'>
                        <Text className='selectionTitle'>Desasignacion general</Text>
                        <Flex className='settingsMenuContentOptions'>
                            <Flex className='settingsButtonContainer'>
                                    <CustomButton extraClassName={"warningButton"} label={"Desasignar Materias"}></CustomButton>
                                    <Text>Desasginar todas las materias</Text>
                            </Flex>   
                        </Flex>
                    </Flex> }

                    
                </Flex>
            </Flex>
        </Flex>
    )

}