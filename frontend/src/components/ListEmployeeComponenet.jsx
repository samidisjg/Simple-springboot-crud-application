import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import employeeServiceInstance from '../services/EmployeeService';

const ListEmployeeComponenet = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getEmployees();
    }, [])

    const getEmployees = () => {
        EmployeeService.getEmployees().then((res) => {
            setEmployees(res.data);
    })
}

    const deleteEmployee = (employeeId) => {
        employeeServiceInstance.deleteEmployee(employeeId).then((response) => {
            getEmployees();
        }).catch(error => {
            console.log(error);
        })
    }

    /*const addEmployee = () => {
        // Use navigate to go to the "/add-employee" route
        navigate('/add-employee');
    };*/

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <Link to = "/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td>
                                <Link className="btn btn-info" to = {`/edit-employee/${employee.id}`}>Update</Link>
                                <button className="btn btn-danger" onClick={() =>deleteEmployee(employee.id)} style={{marginLeft: "10px"}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponenet;
