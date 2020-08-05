import React from 'react';
import Employee from './Employee';
import axios from 'axios';
class EmployeeDetails extends React.Component {
    constructor(props){
        super(props)
        this.state={
            allEmployeeDetails:[]
        }

    }
    componentWillMount(){
        this.getEmployeeDetails()
    }
    getEmployeeDetails(){
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                this.setState({allEmployeeDetails: response.data.data})
                console.log(this.state.allEmployeeDetails)
            }, (error)=>{
                console.log(error)
            })
    }
    EmployeeDetails=()=> { 
        return(
            <table style={{border:"1px solid black",position:"absolute",left:"25%",width:"50%",textAlign:"center"}}>
                <thead>
                    <tr>
                       <th>Employee Id</th> 
                       <th>Employee Name</th>
                       <th>Employee Salary</th>
                       <th>Employee Age</th>
                       <th>Employee Image</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.allEmployeeDetails.map(emp=>{
                        return(
                            <Employee
                                key={emp.id}
                                id={emp.id}
                                employeeName={emp.employee_name}
                                employeeSalary={emp.employee_salary}
                                employeeAge={emp.employee_age}
                                employeeImage={emp.profile_image}>
                            </Employee> 
                        );
                    })
                }   
                </tbody>
            </table>
        )
    }
    render(){
        return(
            <div>
                <h1 style={{color:"green",textAlign:"center"}}>Employee Details</h1>
                {this.EmployeeDetails()}
            </div>
        );
    }
}
 
export default EmployeeDetails;