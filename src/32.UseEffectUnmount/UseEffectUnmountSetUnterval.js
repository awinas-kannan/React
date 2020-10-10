import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

export function UseEffectUnMount() {
    const [employeeCount, setEmployeeCount] = useState(0);

    const [noOfLaptops, setLaptopCount] = useState(0);
    
    useEffect(checkEmployeecount);
    useEffect(getLaptopCount);

    function checkEmployeecount(){
        console.log('Employee useEffect')
        var handle = setInterval(getEmployeesCount, 5000);

        //similar to componentwillunmount
        //return a function
        return () => clearInterval(handle);
    
    }

    function getLaptopCount() {
        console.log('Laptop useEffect')
        fetch("http://localhost:8080/getAllLaptops")
            .then(res => res.json())
            .then(
                (result) => {
                    setLaptopCount(result.length);
                }
            );
    }

    function getEmployeesCount() {
        console.log('Employee count')
        fetch("http://localhost:8080/getAllEmployee")
            .then(res => res.json())
            .then(
                (result) => {
                    setEmployeeCount(result.length);
                }
            );
    }

    function navigateToDepartment() {
        ReactDOM.render(<Departments></Departments>, document.getElementById("root"));
    }
    
    return (
        <div>
            <h2>Welcome to Employee Component...</h2>
            <p>
                <label>Employee Count : <b>{employeeCount}</b></label>
            </p>
            <p>
                <label>Laptops count : <b>{noOfLaptops}</b></label>
            </p>
            <button onClick={navigateToDepartment}>Departments</button>
        </div>
    )
}

function Departments() {
    return (
        <div>
            <h2>Welcome to Departments Component...</h2>
        </div>
    )
}
