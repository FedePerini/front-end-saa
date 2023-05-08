/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Button, Center, Divider, Flex,Input,Select,Text } from "@chakra-ui/react"
import CustomButton from '../Atoms/CustomButton'
import "./SubjectOption.css"

export const SubjectOption = () => {
    return(
        <Flex className='subjectOption'>
            <Flex className='createSubjectForm'>
                <Text className='createSubjectFormTitle'> Crear Materia </Text>
                <Flex className='subjectForm'>
                    <Flex className='subjectInputContainer'>
                        <Text>Nombre</Text>
                        <Input className='subjectInput' placeholder='Nombre de la materia'></Input>
                    </Flex>
                    <Flex className='subjectInputContainer'>
                        <Text>Profesor</Text>
                        <Select className='subjectInput' placeholder='Profesor'></Select>
                    </Flex>
                </Flex>

                <Flex className='createSubjectButtonContainer'>
                    <CustomButton label={"Crear Materia"}></CustomButton>
                </Flex>
            </Flex>

            <Flex className='createSubjectForm'>
                <Text className='createSubjectFormTitle'> Borrar Materia </Text>
                <Flex className='subjectForm'>
                    <Flex className='subjectInputContainer'>
                        <Text>Materia</Text>
                        <Select className='subjectInput' placeholder='Seleccionar Materia'></Select>
                    </Flex>
                </Flex>

                <Flex className='createSubjectButtonContainer'>
                    <CustomButton label={"Borrar Materia"}></CustomButton>
                </Flex>
            </Flex>

            <Flex className='createSubjectForm'>
                <Text className='createSubjectFormTitle'> Editar Materia </Text>
                <Flex className='subjectForm'>
                    <Flex className='subjectInputContainer'>
                        <Text>Materia</Text>
                        <Select className='subjectInput' placeholder='Seleccionar Materia a editar'></Select>
                    </Flex>
                </Flex>

                <Flex className='editSubjectForm'>
                        <Flex className='subjectForm'>
                            <Flex className='subjectInputContainer'>
                                <Text>Nombre</Text>
                                <Input value={"Matematica 3"} className='subjectInput' placeholder='Nombre de la materia'></Input>
                            </Flex>
                            <Flex className='subjectInputContainer'>
                                <Text>Profesor</Text>
                                <Select className='subjectInput' placeholder='Profesor'></Select>
                            </Flex>
                        </Flex>
                    </Flex>

                <Flex className='createSubjectButtonContainer'>
                    <CustomButton label={"Editar Materia"}></CustomButton>
                </Flex>
            </Flex>
            </Flex>
    )
}