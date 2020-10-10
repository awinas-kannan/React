import React from 'react';
import { Salary } from "./Salary";

 class EmployeeDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            newSalary:null
        }
    }
    updateNewSalary=(salary)=>
    {
        this.setState({newSalary:salary});
    }
    render() {
        return (<div>
            <h1>Employee Details ... </h1>
            <p> <label>Employee Id : <b>{this.props.id}</b></label></p>
            <p> <label>Employee Name : <b>{this.props.name}</b></label></p>
            <p> <label>Employee Location :<b> {this.props.loc}</b></label></p>
            <p> <label>Employee Salary :<b> {this.props.sal}</b></label></p>
            <p> <label>New Salary :<b> {this.state.newSalary} </b></label></p>
            <Salary basic={this.props.basic} hra={this.props.hra} spl_allo={this.props.sa} callbackFunction={this.updateNewSalary}></Salary>
        </div>);
    }
}

export default EmployeeDashboard;
