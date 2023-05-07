/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@chakra-ui/react'
import { DayPilotCalendar, DayPilot } from '@daypilot/daypilot-lite-react'

import { CalendarEvent } from '../Domain/CalendarEvent'
import { useState } from 'react'

import "./Calendar.css"
import { useEffect } from 'react'


export const Calendar = () => {


    const generateEventDate = (dayOfWeek,hours,minutes) =>{

        const date = DayPilot.Date.today()

        const dayDifference =  dayOfWeek - date.dayOfWeek()

        return date.addDays(dayDifference).addHours(hours).addMinutes(minutes)
    }

    const [events, setEvents] = useState([
        {
            id: "1",
            text: "Matematica III",
            start: generateEventDate(1,8,0),
            end:  generateEventDate(1,12,0),
        },
        {
            id: "2",
            text: "Algoritmos II",
            start: generateEventDate(1,12,0),
            end:  generateEventDate(1,16,0),
          },
          {
            id: "3",
            text: "Sistemas De Procesamiento de Datos",
            start: generateEventDate(1,16,0),
            end:  generateEventDate(1,20,0),
          },
          {
            id: "4",
            text: "Conceptos de Arquitecturas y Sistemas Operativos",
            start: generateEventDate(2,8,0),
            end:  generateEventDate(2,12,0),
          },
          {
            id: "5",
            text: "Matematica III",
            start: generateEventDate(1,8,0),
            end:  generateEventDate(1,12,0),
        },
      ])
    
      const handleTimeRangeSelected = (args) => {
        const eventsPreChange = events
        console.log(args)
        const newEvent = {
          start: args.start,
          end: args.end,
          text: args.text,
        }
    
        // Check for overlapping events
        const overlappingEvents = events.filter((event) => {
          return newEvent.start < event.end && newEvent.end > event.start
        })
    
        if (overlappingEvents.length === 0) {
          //setEvents((prevState) => [...prevState, newEvent])
        } else {
            console.log("wtf")
            setEvents(eventsPreChange)
          alert("Overlapping events not allowed.")
        }
      }

    return (
        <div>
            <DayPilotCalendar onEventMove={handleTimeRangeSelected} events ={events} locale="es-es" viewType = "Week" headerDateFormat="dddd" />
        </div>
    )
}