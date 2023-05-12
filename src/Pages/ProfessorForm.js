import { VStack, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Box, Text, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { barbie } from '../Utils/MockedData'
import { useLocation, useParams } from 'react-router-dom/dist'
import CustomButton from '../Atoms/CustomButton'

const ProfessorForm = () => {

    const profId = useParams("id")
    let location = useLocation()

    const [professor, setProfessor] = useState({
        nombre: null,
        apellido: null,
        dni: null,
    })

    const [error, setError] = useState({
        nombre: false,
        apellido: false,
        dni: false,
    })

    const getProfessor = id => {
        console.log(id)
        const prof = barbie
        setProfessor(prof)
    }

    const updateProfessor = e => {
        professor[e.target.name] = e.target.value
        setProfessor({...professor})
    }

    const isEditMode = () => location.pathname.includes("/professor/edit")

    const validateField = (e) => {
        /* eslint-disable no-useless-escape */
        switch(e.target.type){
            case "text":
                if(e.target.name.includes("dni")){
                    const REG_EXP_DNI = new RegExp(/\d{1,2}\.?\d{3}\.?\d{3}/)
                    error[e.target.name] = !e.target.value.match(REG_EXP_DNI)
                }
                else {
                    error[e.target.name] = e.target.value.length === 0
                } 
                setError({...error})
                    
        }
    }

    const validateAllFields = () => {
        const errors = Object.values(error).some( er => er === true )
        const nullSpaces = Object.values(professor).some( pr => pr == null )

        return errors || nullSpaces
    }

    useEffect( () => {
        if(isEditMode()){
            getProfessor(profId)
        }
    }, [professor, error])

    return <>
        <VStack className="pageContainer" alignContent={"center"}>
            <Box borderBottom={"1px solid black"} width={"90%"}>
                {!isEditMode() ? 
                <Text fontSize={"3xl"}>Ingresar profesor</Text> 
                :
                <Text fontSize={"3xl"}>Editar profesor</Text>} 
            </Box>
            <VStack width={"30%"} margin={"auto"} justifyContent={"center"} alignContent={"center"} gap={2} >
                <FormControl isRequired isInvalid={error.nombre}>
                    <FormLabel>
                        Nombre
                    </FormLabel>
                    <Input bgColor={"white"} border={"1px solid black"} type = "text" name="nombre" defaultValue={professor.nombre || ""} onChange = { e => updateProfessor(e)} onBlur={ e => validateField(e) }/>
                    {error.nombre? 
                    <FormErrorMessage >
                        Por favor, ingresar un nombre
                    </FormErrorMessage> : null}
                </FormControl>
                
                <FormControl isRequired isInvalid={error.apellido}>
                    <FormLabel>
                        Apellido
                    </FormLabel>
                    <Input bgColor={"white"} border={"1px solid black"} type = "text" name="apellido" defaultValue={professor.apellido || ""} onChange = { e => updateProfessor(e)} onBlur={ e => validateField(e) }/>
                    {error.apellido? 
                    <FormErrorMessage >
                        Por favor, ingresar un apellido
                    </FormErrorMessage> : null}
                </FormControl>
                
                <FormControl isRequired isInvalid={error.dni}>
                    <FormLabel>
                        DNI
                    </FormLabel>
                    <Input bgColor={"white"} border={"1px solid black"} type = "text"  name="dni" defaultValue={professor.dni || ""} onChange = { e => updateProfessor(e)} onBlur={ e => validateField(e) }/>
                    
                    {error.dni? 
                    <FormErrorMessage >
                        Por favor, ingresar un dni valido
                    </FormErrorMessage> 
                    : 
                    <FormHelperText>
                        Ingresar DNI sin espacios ni puntos
                    </FormHelperText>}
                </FormControl>

                <Flex gap={2}>
                    <CustomButton isDisabled={validateAllFields()} label={"Guardar"} onClick={e => handleSubmit(e)} />
                    {isEditMode() ? 
                        <CustomButton extraClassName={"danger"} label={"Eliminar"} onClick={e => handleDelete(e)} />
                        :
                        null
                    } 
                </Flex>
            </VStack>
        </VStack>
    
    </>
}

export default ProfessorForm