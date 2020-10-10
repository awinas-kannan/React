import React, { useEffect, useState } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import '../index.css'
export function NestedEditEmployee(props) {

    console.log(props);


    return (

        <div>
            <Link to={"/Employee/" + props.match.params.id}>Personal</Link> &nbsp;&nbsp;
            <NavLink to={"/Employee/" + props.match.params.id + "/salary"} activeClassName="links">Salary</NavLink>&nbsp;&nbsp;
            <NavLink to={"/Employee/" + props.match.params.id + "/projects"} activeClassName="links">Projects</NavLink>

            <Switch>
                <Route exact path="/Employee/:id" component={EmployeePersonalInfo}></Route>
                <Route path="/Employee/:id/salary" component={EmployeeSalaryInfo}></Route>
                <Route path="/Employee/:id/projects" component={EmployeeProjectInfo}></Route>

            </Switch>
        </div>

    )
}

function EmployeePersonalInfo(prop) {
    const [emp, setEmp] = useState({});
    console.log(prop);
    function getEmp() {

    }
    function changeEmp(e) {

    }
    useEffect(() => {
        fetch('http://localhost:8080/Employee/' + prop.match.params.id)
            .then(res => res.json())
            .then(
                (result) => {
                    setEmp(result);
                }
            );
    }, []);


    return (
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

function EmployeeSalaryInfo() {

    return (
        <h2>Employee Salary Details...</h2>
    );
}


function EmployeeProjectInfo() {
    return (

        <h2>Employee Project Details...</h2>

    );
}