

import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:3001/user";

class EmployeeService {

    getEmployees(){
        return axios.get(USER_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(USER_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(USER_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(USER_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(USER_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()

