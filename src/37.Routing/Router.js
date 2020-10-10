import React from 'react';
import { CustomHookEmployeeReports, CustomHookLaptopReports } from '../35.CustomHooks/CustomHook'
import { Link, Route, Switch } from 'react-router-dom';


export function MyRouterComponent() {
    return (
        <div>
            <h2>Welcome to App Component...</h2>
            <ul>
                <li><Link to="/">Employees</Link></li>
                <li><Link to="/laps">Laptops</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>

            {/* <Route path="/employees" component={CustomHookEmployeeReports}></Route>
            <Route path="/laps" component={CustomHookLaptopReports}></Route>
            <Route path="/projects" component={Project}></Route> */}

            {/* <Route path="/" component={CustomHookEmployeeReports}></Route>
            <Route path="/laps" component={CustomHookLaptopReports}></Route>
            <Route path="/projects" component={Project}></Route> */}

            <Switch>
                <Route exact path="/" component={CustomHookEmployeeReports}></Route>
                <Route path="/laps" component={CustomHookLaptopReports}></Route>
                <Route path="/projects" component={Project}></Route>
                <Route path="/laps" component={Project}></Route>
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