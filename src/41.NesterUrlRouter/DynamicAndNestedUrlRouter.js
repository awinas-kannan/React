import React from 'react';
import { CustomHookEmployeeReports, CustomHookLaptopReports } from '../35.CustomHooks/CustomHook'
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import '../index.css'
import { NestedEditEmployee } from './NestedEditEmployee';


export function DynamicAndNestedUrlRouterComponent() {
    return (

        <div>
           
            <h2>Welcome to App Component...</h2>
            <ul>    
                <li><Link to="/" >Employees</Link></li>
                <li><NavLink to="/laps" activeClassName='links'>Laptops</NavLink></li>
                <li><NavLink to="/projects" activeClassName='links'>Projects</NavLink></li>
            </ul>

            <Switch>
                <Route exact path="/" component={CustomHookEmployeeReports}></Route>
                <Route path="/laps" component={CustomHookLaptopReports}></Route>
                <Route path="/projects" component={Project}></Route>
                <Route path="/Employee/:id" component={NestedEditEmployee}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    )
}

function Project() {
    return (
        <div>
            <h1>Hi This is project component</h1>
        </div>
    )
}

function NotFound() {
    return (
        <div>
            <h1>404 Not found .Please enter correct link</h1>
        </div>
    )
}