import axios from 'axios';

const Employee_API_BASE_URL = "http://localhost:8080/api/v1/Employees";

class EmployeeService {

    getEmployees(){
        return axios.get(Employee_API_BASE_URL);
    }

    createEmployee(Employee){
        return axios.post(Employee_API_BASE_URL, Employee);
    }

    getEmployeeById(EmployeeId){
        return axios.get(Employee_API_BASE_URL + '/' + EmployeeId);
    }

    updateEmployee(Employee, EmployeeId){
        return axios.put(Employee_API_BASE_URL + '/' + EmployeeId, Employee);
    }

    deleteEmployee(EmployeeId){
        return axios.delete(Employee_API_BASE_URL + '/' + EmployeeId);
    }
}

export default new EmployeeService()