import React from 'react';

export class SaveEmployee extends React.Component {
    constructor(props) {
        super(props);
    }

    createEmployee = () => {
        let empjson = {
            name: this.refs.name.value,
            age: this.refs.age.value,
            tech: this.refs.tech.value
        }

        //Project name : SpringBootWebApp
        fetch('http://localhost:8080/saveEmployee', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(empjson)
        }).then((respo) => respo.json()).then((emp) =>{
        if (emp) {
            alert('Hi ' + emp.name +'. Your Employee Id is ' + emp.id);
        }});
    }

    render() {
        return (
            <div>
                <h1>Add Employee ... </h1>
                <p> <label>Employee Name : <b><input type="text" ref="name" /> </b></label></p>
                <p> <label>Tech : <b><input type="text" ref="tech" /> </b></label></p>
                <p> <label>Age : <b><input type="text" ref="age" /></b></label></p>
                <button onClick={this.createEmployee}>Add New Employee</button>
            </div>
        )
    }
}