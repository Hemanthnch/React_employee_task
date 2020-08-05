import React from 'react';


class  Employee extends React.Component {
   

    render() { 
        return (
                <tr style={{border:"2px"}}>
                    <td>{this.props.id}</td>
                    <td>{this.props.employeeName}</td>
                    <td>{this.props.employeeSalary}</td>
                    <td>{this.props.employeeAge}</td>
                    <td>{this.props.employeeImage}</td>
                </tr>
          );
    }
}
 
export default Employee;