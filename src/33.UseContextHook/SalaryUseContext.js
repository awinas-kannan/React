import React,{useContext} from 'react'
import { employeeContext } from '../8.CommunicationWithContext/constants';


export function SalaryUseContext() {
    let context = useContext(employeeContext);

    return (
        <div>
            <h2>Welcome to Salary Component...</h2>
            <p>
                <label>Employee ID : <b>{context.data.Id}</b></label>
            </p>
            <p>
                <label>Employee Salary : <b>{context.data.Salary}</b></label>
            </p>
        </div>
    );
}