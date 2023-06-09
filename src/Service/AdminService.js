/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from 'axios'
import { REST_SERVER_URL } from './Constants'

class AdminService {

    async login(userCredentials){
        const response = await axios.post(REST_SERVER_URL + '/admin/login', userCredentials)
        return response.data
    }

}

export const adminService = new AdminService()