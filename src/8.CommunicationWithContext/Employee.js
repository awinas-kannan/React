import React from 'react';
import { employeeContext} from './constants';
import Salary from './Salary';

export class Employee extends React.Component {
    static contextType = employeeContext;
    constructor(props) {
        super(props);
        //console.log(props);
    }
    render() {
        return (
            <div>
                <h1>Employee Component </h1>
                <p> Employee Id  : {this.context.EmpId} </p>
                <Salary></Salary>
            </div>
        )
    }
}
