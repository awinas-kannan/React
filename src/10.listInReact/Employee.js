import React from 'react';

export function Employee(prop)
{
    const emp = prop.data;
    return (
        <div style={{border:'1px solid red',width:'25%',marginLeft:'100px'}}>
      <p> <label>Employee Id : <b>{emp.EmpId}</b></label></p>
      <p> <label>Employee Name : <b>{emp.EmpName}</b></label></p>
      <p> <label>Employee Sal :<b> {emp.EmpSal}</b></label></p>
    </div>
    )
}