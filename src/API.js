import axios from "axios"

export default class API {
    static BASE_URL_V1 = 'https://localhost:5001'
    static ALLOWANCE = '/allowance'

    // auth
    static login(loginData) {
        return axios.post(`${this.BASE_URL_V1}/login`, loginData)
    }


    // department
    static getListDepartment() {
        return axios.get(`${this.BASE_URL_V1}/department`)
    }

    // allowance
    static getListAllowance() {
        return axios.get(`${this.BASE_URL_V1}/${this.ALLOWANCE}/GetListAllowance`)
    }

}