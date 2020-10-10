import React, { useEffect, useState } from 'react';

export function EditEmployee(prop) {
    const [emp, setEmp] = useState({});
    console.log(prop);
    function getEmp() {

    }

    useEffect(() => {
        fetch('http://localhost:8080/Employee/'+prop.match.params.id)
            .then(res => res.json())
            .then(
                (result) => {
                    setEmp(result);
                }
            );
    }, []);

   

    function changeEmp(e) {

    }
    return(
        <div>
            <h2>Employee Details...</h2>
            <p>
                <label>Employee ID : <input type="text" onChange={changeEmp} value={emp.id}></input></label>
            </p>
            <p>
                <label>Employee Name : <input type="text" onChange={changeEmp} value={emp.name}></input></label>
            </p>
            <p>
                <label>Employee Tech : <input type="text" onChange={changeEmp} value={emp.tech}></input></label>
            </p>
            <input type="submit" value="Save"></input>
        </div>
    )
}