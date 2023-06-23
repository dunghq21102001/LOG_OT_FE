import axios from "axios"

export default class API {
    static BASE_URL_V1 = 'https://localhost:5001'
    static ALLOWANCE = '/allowance'

    // auth
    static login(loginData) {
        return axios.post(`${this.BASE_URL_V1}/login`, loginData)
    }


    // department get List
    static getListDepartment() {
        return axios.get(`${this.BASE_URL_V1}/Department`)
    }

    static createDepartment(data){
        return axios.post(`${this.BASE_URL_V1}/Department/Create`, data)
    }

    static updateDepartment(data){
        return axios.put(`${this.BASE_URL_V1}/Department/Update`, data)
    }

    static deleteDepartment(id){
        return axios.delete(`${this.BASE_URL_V1}/Department/Delete?id=${id}`)
    }

    // allowance
    static getListAllowance() {
        return axios.get(`${this.BASE_URL_V1}/${this.ALLOWANCE}/GetListAllowance`)
    }

}