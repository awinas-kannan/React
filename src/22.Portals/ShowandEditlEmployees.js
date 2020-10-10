import React from 'react';
import { EmployeeModal } from './EmployeeModal';
import { Modal } from './Model';

export class EmployeePortal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            model:null
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/getAllEmployee').then((result) => result.json()).then((emp) => {
            this.setState({
                employees: emp
            })
        });
    }

    closeModel =()=> this.setState({model:null});
    showOrCloseModal = (e) => {
        console.log('id -' + e.target.id);
        let emp = null;
        for (var i = 0; i < this.state.employees.length; i++) {
            if (this.state.employees[i].id == e.target.id) {
                emp = this.state.employees[i];
            }
        }
        console.log(emp)
       
        this.setState({
            model:
                <Modal close={this.closeModel}>
                    <EmployeeModal employee={emp}></EmployeeModal>
                </Modal>
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
                            <tr key={emp.id}><td>{emp.id}</td><td>{emp.name}</td><td>{emp.tech}</td>
                                <td>
                                    <button id={emp.id} onClick={this.showOrCloseModal} >Edit</button>
                                </td>
                            </tr>

                        )
                        )}
                    </tbody>

                </table>
                            {this.state.model}
            </div>
        )
    }


}

