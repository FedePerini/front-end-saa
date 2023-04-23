/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from 'axios'
const API_KEY = "5b3ce3597851110001cf624801fab6fcc70c4bb5a16b1770c98c1679"

class RouteService{



    async getRoute(){

        const apiRoute = 'https://api.openrouteservice.org/v2/directions/wheelchair?api_key=' + API_KEY + '&start=-58.5263602,-34.5786899&end=-58.521699,-34.581562'

        const response = await axios.get(apiRoute)

        return response.data.features[0].geometry.coordinates
    }

}

export const routeService = new RouteService()