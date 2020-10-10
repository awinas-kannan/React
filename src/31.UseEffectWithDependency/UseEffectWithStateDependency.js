import React, { useState, useEffect } from "react";

export function EmployeeUseEffectWithSateDependency() {
    console.log('EmployeeUseEffectComponent Loading !!!! ')
    const [employees, setEmployees] = useState([]);
    const [searchText, setName] = useState('');


    function loadDatas() {
        console.log('We are in useEffect function');
        console.log(document.readyState);
        fetch('http://localhost:8080/searchEmployeeByName?name=' + searchText).then((result) => result.json()).then((emp) => {
            setEmployees(emp);

        });
    };

    //This means that only for searchText state change , useEffect wil be called again....
    useEffect(loadDatas, [searchText]);

    function onSearchTextChange(e) {
        setName(e.target.value);
    }


    console.log('Before return ' + document.readyState);
    return (
        <div>
            <h1>Hook : useEffect with dependency </h1>
            <h2>Employees Data...</h2>
            <p>
                <label>Search By Name : <input type="text" value={searchText}
                    onChange={onSearchTextChange}></input></label>
            </p>
            {/* <p>
                <button onClick={addNewEmployee}>Add Employee</button>
            </p> */}
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
