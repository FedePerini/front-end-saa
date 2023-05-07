/* eslint-disable no-unused-vars */
import { Flex,Text,Button } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import "./FloorSelector.css"
import CustomButton from '../Atoms/CustomButton'

export const FloorSelector = (props) => {

    return(
        <Flex className="floorSelector">
            <CustomButton isDisabled={props.floorNumber >= props.maxValue} onClick={props.increaseFunc} label={"+"}></CustomButton>
            {props.floorNumber}
            <CustomButton isDisabled={props.floorNumber <= props.minValue} onClick={props.decreaseFunc} label={"-"}></CustomButton>
        </Flex>
    )

}

FloorSelector.propTypes ={
    floorNumber: PropTypes.number,
    increaseFunc: PropTypes.func,
    decreaseFunc: PropTypes.func,
    maxValue: PropTypes.number,
    minValue: PropTypes.number,
}