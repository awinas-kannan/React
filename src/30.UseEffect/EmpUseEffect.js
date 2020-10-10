import React, { useState, useEffect } from "react";

export function EmployeeUseEffectComponent() {
    console.log('EmployeeUseEffectComponent Loading !!!! ')
    const [employees, setEmployees] = useState([]);


    // const loadDatas = () => {
    //     console.log('We are in useEffect function');
    //     console.log(document.readyState);
    //     fetch('http://localhost:8080/getAllEmployee').then((result) => result.json()).then((emp) => {
    //         setEmployees(emp);

    //     });
    // };

    function loadDatas() {
        console.log('We are in useEffect function');
        console.log(document.readyState);
        fetch('http://localhost:8080/getAllEmployee').then((result) => result.json()).then((emp) => {
            setEmployees(emp);

        });
    };

    useEffect(loadDatas, []);
    
    console.log('Before return ' + document.readyState);
    return (
        <div>
            <h1>Hook : useEffect </h1>
            <style>{"table,th,tr,td{border:1px solid blue;}"}</style>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>TECH</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}><td>{emp.id}</td><td>{emp.name}</td><td>{emp.tech}</td></tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}
