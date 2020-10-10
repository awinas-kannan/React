import React from 'react';
import { employeeList } from '../8.CommunicationWithContext/constants'
import { Employee } from './Employee';

export function DisplayEmployeeList() {
    alert('DisplayEmployeeList');
    const empList = employeeList;

    //Without returing with div
    // return (empList.map((emp) =>
    //     <Employee key={emp.EmpId} data={emp}></Employee>));

    //With retrun div
    const map = empList.map((emp) =>
        <Employee key={emp.EmpId} data={emp}></Employee>);

    return (
        <div>
            {map}
        </div>
    )

}