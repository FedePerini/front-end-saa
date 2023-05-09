/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from 'axios'
import { REST_SERVER_URL } from './Constants'

class BuildingService {

    async getAllBuildings(){
        const response = await axios.get(REST_SERVER_URL + "/edificios")
        return response.data
    }

    async getBuildingById(id){
        const response = await axios.get(REST_SERVER_URL + "/edificios/" + id)
        return response.data
    }


}

export const buildingService = new BuildingService()