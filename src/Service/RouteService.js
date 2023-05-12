/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from 'axios'
const API_KEY = "5b3ce3597851110001cf624801fab6fcc70c4bb5a16b1770c98c1679"

class RouteService{



    async getRoute(){

        const url = 'https://routing.openstreetmap.de/routed-foot/route/v1/driving/-58.52636396884919,-34.57869402914043;-58.52110683918,-34.58154942837035?overview=false&geometries=polyline&steps=true'
        const response = await axios.get(url)
        
        return response.data.routes[0].legs[0].steps
    }
}

export const routeService = new RouteService()