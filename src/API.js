import axios from "axios"

export default class API {
    static BASE_URL_V1 = 'https://localhost:5001'

    static login(loginData){
        return axios.post(`${this.BASE_URL_V1}/login`, loginData)
    }
}