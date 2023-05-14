/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from "axios";
import { REST_SERVER_URL } from "./Constants";

class ClassroomService{

    async getClassroomInfo(id){
        const response = await axios.get(REST_SERVER_URL + "/aula/" + id)
        return response.data
    }

}