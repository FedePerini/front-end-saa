/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button, Flex, Input,Text } from '@chakra-ui/react'
import "./SubjectSearchCard.css"
import { useNavigate } from 'react-router-dom'
import MapContext from '../Utils/MapContext'
import { routeService } from '../Service/RouteService'
import { fromLonLat } from 'ol/proj'
import { LineString } from 'ol/geom'
import polyline from 'polyline-encoded'
import { Feature } from 'ol'

export const SubjectSearchCard = (props) => {

    const navigate = useNavigate()
    const { map } = useContext(MapContext)

    const navigateToClassroom = () =>{
        navigate("/classroom/" + props.subjectDTO.idAula)
    }
    
    const generateRoute = async () => {
        await routeManager.generateRoute(map.getAllLayers()[1].getSource())
}

    return(
        <Flex className='subjectSearchCard'>
            <Text> Edificio: {props.subjectDTO.nombreEdificio}-{props.subjectDTO.piso} </Text>
            <Text> Aula: {props.subjectDTO.nombreAula} </Text>
            <Flex justifyContent={'space-between'}>
                <Text> Desde: {props.subjectDTO.horaDesde} </Text>
                <Text> Hasta: {props.subjectDTO.horaHasta} </Text>
            </Flex>
            <Flex gap={10}>
                <Button onClick={navigateToClassroom}> Ir al aula </Button>
                <Button onClick={generateRoute}> Generar ruta al edificio </Button>
            </Flex>

        </Flex>
    )

}

SubjectSearchCard.propTypes = {
    subjectDTO: PropTypes.object.isRequired,
}
