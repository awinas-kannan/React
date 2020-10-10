import React, { useContext } from 'react';
import { employeeContext } from '../8.CommunicationWithContext/constants';
import { SalaryUseContext } from './SalaryUseContext';

export function EmployeeUseContext() {
    let context = useContext(employeeContext);

    function changeEmploymentType() {

        context.updateEmployee(
            { ...context.data, EmpType: context.data.EmpType === 'Permanent' ? 'Contract' : 'Permanent' }
        );
    }
    return (
        <div>
            <h2>Welcome to Employee Component...</h2>
            <p>
                <label>Employee ID : <b>{context.data.Id}</b></label>
            </p>
            <p>
                <label>Employee Name : <b>{context.data.Name}</b></label>
            </p>
            <p>
                <label>Employee Type : <b>{context.data.EmpType}</b></label>
            </p>
            <p>
                <button onClick={changeEmploymentType}>Change Employee type</button>
            </p>
            <employeeContext.Consumer>
                {value => value.data.EmpType === 'Permanent' ?
                    <Permanent></Permanent> : <Contract></Contract>}
            </employeeContext.Consumer>

            {context.data.EmpType === 'Permanent' ?
                <Permanent></Permanent> : <Contract></Contract>}


            <SalaryUseContext></SalaryUseContext>
        </div>
    );
}

function Permanent() {
    return (
        <div style={{border:'2px solid red'}}>
            <h2 >Permanent Component Contents...</h2>
        </div>
    );
}

function Contract() {
    return (
        <div style={{border:'2px solid blue'}}>
            <h2>Contract Component Contents...</h2>
        </div>
    )
}