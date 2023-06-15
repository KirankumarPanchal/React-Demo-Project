import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

export class EmployeeComponent extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {
        employees:[]
      };
    }
  
    componentDidMount(){
      fetch('https://localhost:7271/api/Brand/GetBrandList').then(res=>res.json()).then(result=>{
        this.setState({employees:result});
      })
    }
  
    render(){
      return (
        <div>
          <h2>Employee Details</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map(emp=>(
                <tr key ={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }

export default EmployeeComponent;