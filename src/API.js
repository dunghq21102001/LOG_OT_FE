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

    // Emp contact

    static getListEmployeeContract(page) {
        return axios.get(`${this.BASE_URL_V1}/EmployeeContract/GetList?pg=${page}`)
    }

    static createEmployeeContract(data) {
        return axios.post(`${this.BASE_URL_V1}/EmployeeContract/Create`, data)
    }

    static getListEmployeeContractStatus() {
        return axios.get(`${this.BASE_URL_V1}/api/Enum/EmployeeContractStatus`)
    }

    static getListSalaryType() {
        return axios.get(`${this.BASE_URL_V1}/api/Enum/SalaryType`)
    }

    static getListContractType() {
        return axios.get(`${this.BASE_URL_V1}/api/Enum/ContractType`)
    }

    static getListInsuranceType() {
        return axios.get(`${this.BASE_URL_V1}/api/Enum/InsuranceType`)
    }

    static getListEmployeeContractStatus() {
        return axios.get(`${this.BASE_URL_V1}/api/Enum/EmployeeContractStatus`)
    }

    static updateEmployeeContract(data) {
        return axios.put(`${this.BASE_URL_V1}/EmployeeContract/Update`, data)
    }

    static deleteEmployeeContract(id) {
        return axios.delete(`${this.BASE_URL_V1}/EmployeeContract/Delete/${id}`)
    }
    
    //allowance
    static getListAllowance(page) {
        return axios.get(`${this.BASE_URL_V1}/Allowance/GetListAllowance/${page}`)
    }

    static getAllListAllowance() {
        return axios.get(`${this.BASE_URL_V1}/Allowance/GetAll`)
    }

    static createAllowance(data){
        return axios.post(`${this.BASE_URL_V1}/Allowance/CreateAllowance`, data)
    }

    static deleteAllowance(id){
        return axios.delete(`${this.BASE_URL_V1}/Allowance/DeleteAllowance/${id}`)
    }

    static updateAllowance(data){
        return axios.put(`${this.BASE_URL_V1}/Allowance/UpdateAllowance`, data)
    }

    static getListAllowanceType() {
        return axios.get(`${this.BASE_URL_V1}/api/Enum/AllowanceType`)
    }
}