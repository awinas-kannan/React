import React from 'react';

export class ShowAllEmployees extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }
    
    //Called when the class component is rendered
    //Spring Project name : SpringBootWebApp //ref git
    //https://github.com/AWINAS-KANNAN-2719/SprinBootRemote
    componentDidMount()
    {
        alert('componentDidMount')
        fetch('http://localhost:8080/getAllEmployee').then((result)=>result.json()).then((emp)=> {
            this.setState({
                employees:emp
            })
        });
    }

    clearall= () => {
        alert('clear all called')
        this.setState({
            employees:[]
        });
    }
    render() {
        return (
            <div>
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
                    {this.state.employees.map(emp => (
                        <tr key={emp.id}><td>{emp.id}</td><td>{emp.name}</td><td>{emp.tech}</td></tr>
                    )
                    )}
                </tbody>
            </table>
            <button onClick={this.clearall} >chage state to check component didmount</button>
            </div>
        )
    }


}