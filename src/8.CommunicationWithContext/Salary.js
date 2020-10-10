import React from 'react';
import { employeeContext} from './constants';

class Salary extends React.Component {
    static contextType = employeeContext;
    render(){
        return (
            <div>
                <h1>Salary Component </h1>
                <p> Employee Id  : {this.context.EmpId} </p>
                <button onClick={this.context.changeEmpId}>Update Button In Salary</button>
            </div>
        )
    }
}
export default Salary ;