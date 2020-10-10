import ReactDOM from "react-dom";
import React, { useState, useContext } from "react";
import { employeeContext } from "../8.CommunicationWithContext/constants";
import { EmployeeUseContext } from "./EmpUseContext";


export function UseContextApp() {

    const [employee, setEmployee] = useState({
        Id: 101, Name: 'Awinas',
        Location: 'Madurai', Salary: 50000, EmpType: 'Contract'
    });

    function chageStateVal(e) {
        const targetName = e.target.name;
        const targetval = e.target.value;
        setEmployee({
            ...employee,
            [targetName]: targetval
        });
    }
    return (
        <div>
            <h2>Welcome to App Component...</h2>
            <p>
                <label>Employee ID : <b>{employee.Id}</b></label>
            </p>
            <p>
                <label>Employee Name : <b>{employee.Name}</b></label>
            </p>
            <p>
                <label>Employee Type : <b>{employee.EmpType}</b></label>
            </p>
             Update Salary :  <input type="text" name='Salary' value={employee.Salary} onChange={chageStateVal}></input>
            {/* <employeeContext.Provider value={employee}>
                <EmployeeUseContext />
            </employeeContext.Provider> */}
            <employeeContext.Provider value={{ data: employee, updateEmployee: setEmployee }}>
                <EmployeeUseContext />
            </employeeContext.Provider>

        </div>
    );
}

