import React from 'react';

export class EmployeeModal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Employee Details...</h2>
                <p>
                    <label>Employee ID : <input type="text" value={this.props.employee.id}></input></label>
                </p>
                <p>
                    <label>Employee Name : <input type="text" value={this.props.employee.name}></input></label>
                </p>
                <p>
                    <label>Employee Tech : <input type="text" value={this.props.employee.tech}></input></label>
                </p>
                <input type="submit" value="Save"></input>
            </div>
        )
    }
}