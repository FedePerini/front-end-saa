/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
import React from 'react'
import { FaSearch } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import { Button, Flex, Input,Text } from '@chakra-ui/react'
import { useState } from 'react'
import { SubjectSearchCard } from '../Molecules/SubjectSearchCard'
import { materiaService } from '../Service/MateriaService'
import "./SubjectSearch.css"

export const SubjectSearch = () => {

    const [search, setSearch] = useState("")
    const [showCard, setShowCard] = useState(false)
    const [subjects, setSubjects] = useState([])
    
    const handleSearchChange = (search) => {
        setSearch(search.target.value)
    }

    const searchSubject = async () => {
        if(showCard){
            setShowCard(false)
            setSearch("")
        }else{
            setShowCard(true)
            const subjects = await materiaService.filterMateriaByName(new Date().getDay() - 1,search)
            setSubjects(subjects)
        }
    }

    const buttonIcon = () => {

        if(showCard){
            return <MdClose/>
        }else{
            return <FaSearch/>
        }
    }

    return (
        <Flex className='subjectSearch'>
            <Flex>
                <Input value={search} onChange={handleSearchChange} className='subjectSearchInput' placeholder='Buscar Materia'></Input>
                <Button onClick={searchSubject} className='subjectSearchButton'> {buttonIcon()} </Button>
            </Flex>
            {(showCard) && 
                <Flex flexDirection={"column"}>
                    {subjects.map((subject) => {
                        return <SubjectSearchCard subjectDTO={subject} key={subject.idAsignacion}></SubjectSearchCard>
                    })}
                </Flex>}
        </Flex>
    )

}