/* eslint-disable no-unused-vars */
import { Button, Flex } from "@chakra-ui/react"
import React from "react"
import "./ButtonsPack.css"

export const ButtonsPack = () => {

    return (
        <Flex className="buttonContainer">
            <Button className="button">Editar Asignacion</Button>
            <Button className="button">Clausurar Aula</Button>
        </Flex>
    )
}