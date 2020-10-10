import React from 'react';

export class EmpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {
                Id: '',
                Name: '',
                Age: ''
            }
        }
    }

    //change handler
    saveToState = (e) => {
        const inpFieldName = e.target.name;
        const inpFieldVal = e.target.value;
        this.setState({
            employee: {
                ...this.state.employee, // If not used only particular input will be set other will be deleted
                [inpFieldName]: inpFieldVal
            }
        });
        console.log(this.state.employee);
    }

    createEmployee = () => console.log(this.state.employee);

    render() {
        return (
            <div>
                <h1>Add Employee</h1>
                <p> <label> Id : <b><input type="text" name='Id' ref="id" onChange={this.saveToState} /> </b></label></p>

                <p> <label> Name : <b><input type="text" name='Name' ref="name" onChange={this.saveToState} value={this.state.employee.Name}/> </b></label></p>

                <p> <label>Age : <b><input type="text" name='Age' ref="age" onChange={this.saveToState} value={this.state.employee.Age} /></b></label></p>
                <button onClick={this.createEmployee}>Add New Employee</button>
            </div>
        )
    }
}