import React from 'react';
import { employeeContext } from './constants';
import { Employee } from './Employee';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            EmpId: 1,
            EmpName: 'awi',
            changeEmpId : this.changeVal
        }
    }

    changeVal =()=> {
        this.setState({
            EmpId: 6
        })
    }
    render() {
        return (
            <div>
                <h1> App Component</h1>
                <p> Employee Id : {this.state.EmpId}</p>
                <employeeContext.Provider value={this.state} >
                    <Employee />
                </employeeContext.Provider>
                <button onClick={this.changeVal}>Update Button In APP</button>
            </div>
        )
    }
}