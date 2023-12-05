import React, { useEffect, useState } from 'react';
import employeeServiceInstance from '../services/EmployeeService'
//import {useHistory} from 'react-router-dom';
import { Link, useNavigate,useParams } from 'react-router-dom';

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  //const history = useHistory();
  const navigate = useNavigate();
  const {id} = useParams();

  const saveEmployee = (e) => {
    e.preventDefault();

    const employee = { firstName, lastName, emailId };
    //console.log(employee);
    employeeServiceInstance.createEmployee(employee).then((response) => {
        console.log(response.data);
        //history.push('/employees')
        navigate('/employees');
    }).catch(error => {
        console.group(error);
    })
  };

  useEffect(() => {
    employeeServiceInstance.getEmployeeById(id).then((response) => {
      setFirstName(response.data.firstName)
      setLastName(response.data.lastName)
      setEmailId(response.data.emailId)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const title = () => {
    if(id) {
      return <h2 className="text-center">Update Employee</h2>
    }else{
      return <h2 className="text-center">Add Employee</h2>
    }
  }

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-6 offset-md-6">
           {
            title()
           }
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email Id</label>
                  <input
                    type="email"
                    placeholder="Enter EmailId"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveEmployee(e)}
                >
                  Submit
                </button>
                <Link to ="/employees" className="btn btn-danger">Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
