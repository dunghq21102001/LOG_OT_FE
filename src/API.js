import axios from "axios"

export default class API {
    static BASE_URL_V1 = 'https://localhost:5001'
    static ALLOWANCE = 'allowance'
    static EMPLOYEE = 'Employee'
    static POSITION = 'Position'
    static MATERNITYEMPLOYEE = "MaternityEmployee"
    static OVERTIMELOG = 'OvertimeLog'
    static DEPENDENT = 'Dependent'
    static CONTRACT = 'EmployeeContract'

    // auth
    static login(loginData) {
        return axios.post(`${this.BASE_URL_V1}/login`, loginData)
    }


    // department get List
    static getListDepartment() {
        return axios.get(`${this.BASE_URL_V1}/Department`)
    }

    static createDepartment(data) {
        return axios.post(`${this.BASE_URL_V1}/Department/Create`, data)
    }

    static updateDepartment(data) {
        return axios.put(`${this.BASE_URL_V1}/Department/Update`, data)
    }

    static deleteDepartment(id) {
        return axios.delete(`${this.BASE_URL_V1}/Department/Delete?id=${id}`)
    }

    // allowance
    static getListAllowance(page) {
        return axios.get(`${this.BASE_URL_V1}/${this.ALLOWANCE}/GetListAllowance/${page}`)
    }

    //dependent
    static getDependentList(page) {
        return axios.get(`${this.BASE_URL_V1}/${this.DEPENDENT}/GetListDependent/${page}`)
    }

    //contract
    static getContractList(page) {
        return axios.get(`${this.BASE_URL_V1}/${this.CONTRACT}/GetList?pg=${page}`)
    }
    static createEmployeeContract(data) {
        return axios.post(`${this.BASE_URL_V1}/${this.CONTRACT}/Create`, data)
    }

    //employee
    static getListEmployee(page = 1) {
        return axios.get(`${this.BASE_URL_V1}/${this.EMPLOYEE}?pg=${page}`)
    }
    static createEmployee(data) {
        return axios.post(`${this.BASE_URL_V1}/${this.EMPLOYEE}/Create`, data)
    }
    static updateEmployee(data) {
        return axios.put(`${this.BASE_URL_V1}/${this.EMPLOYEE}/update`, data)
    }
    static getDetailEmployee(username) {
        return axios.get(`${this.BASE_URL_V1}/${this.EMPLOYEE}/GetDetailEmployee?username=${username}`)
    }


    // Position
    static getListPosition() {
        return axios.get(`${this.BASE_URL_V1}/Position`)
    }

    static createPosition(data) {
        return axios.post(`${this.BASE_URL_V1}/Position/Create`, data)
    }

    static updatePosition(data) {
        return axios.put(`${this.BASE_URL_V1}/Position/Update`, data)
    }

    static deletePosition(id) {
        return axios.delete(`${this.BASE_URL_V1}/Position/Delete?id=${id}`)
    }

    //MaternityEmployee
    static getMaternityEmployeeList(page) {
        return axios.get(`${this.BASE_URL_V1}/${this.MATERNITYEMPLOYEE}/GetListMaternityEmployee/${page}`)
    }

    //OvertimeLog
    static getOverTimeLogList() {
        return axios.get(`${this.BASE_URL_V1}/${this.OVERTIMELOG}/GetOvertimeLog`)
    }
    static createOTLog(data) {
        return axios.post(`${this.BASE_URL_V1}/${this.OVERTIMELOG}/CreateOvertimeLog`, data)
    }


    // Level
    static getListLevel() {
        return axios.get(`${this.BASE_URL_V1}/Level/GetLevel`)
    }

    static createLevel(data) {
        return axios.post(`${this.BASE_URL_V1}/Level/CreateLevel`, data)
    }

    static deleteLevel(id) {
        return axios.delete(`${this.BASE_URL_V1}/Level/Delete/${id}`)
    }

    static updateLevel(id, data) {
        return axios.put(`${this.BASE_URL_V1}/Level/Update/${id}`, data);
    }

    //enums
    static salaryType() {
        return axios.get(`${this.BASE_URL_V1}/api/Enum/SalaryType`)
    }
    static contractType() {
        return axios.get(`${this.BASE_URL_V1}/api/Enum/ContractType`)
    }
    static insuranceType() {
        return axios.get(`${this.BASE_URL_V1}/api/Enum/InsuranceType`)
    }

}