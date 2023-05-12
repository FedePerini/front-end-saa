/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from 'axios'
import { REST_SERVER_URL } from './Constants'

class MateriaService {

    async filterMateriaByName(day,name){
        const response = await axios.get(REST_SERVER_URL + '/materia/filtro/'+ day + '/' + name)
        return response.data
    }

}

export const materiaService = new MateriaService()