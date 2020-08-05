import React from 'react';
import { Link, Route } from 'react-router-dom';
import EmployeeDetails from './employeeDetails';


class Menu extends React.Component {

    render() { 
        return ( 
            <div>
               
                <Link to='/employeeDetails'>Employee Details</Link>
                <switch>
                    <Route exact to='/employeeDetails' component={EmployeeDetails}></Route>
                </switch>


            </div>
         );
    }
}
 
export default Menu;