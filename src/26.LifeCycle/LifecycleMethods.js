import React from 'react';
import ReactDOM from 'react-dom';
import { DisplayEmployeeList } from '../10.listInReact/DispEmployeeList';

export class ComponentLifeCycleMethods extends React.Component {
    stateChanger =null;
    constructor() {
        super();
        alert('constructor');
        this.state = {
            employee: {
                id: '1',
                name: 'awi',
                tech: 'react'
            },
            count: 0
        }
        this.stateChanger=setInterval(this.changeState, 2000);

    }

    //Even after another component is rendered after count =5
    //the setInterval method is called.
    //TO avoid this we nee to unmount setInterval
    changeState = () => {
        alert('changeState')
        alert(this.state.count);
        if (this.state.count < 3) {
            this.setState({
                employee: this.state.employee,
                count: this.state.count + 1
            })
        }
        else {
            ReactDOM.render(<DisplayEmployeeList></DisplayEmployeeList>, document.getElementById("root"));
        }
    }

    componentWillUnmount() {
        alert('componentWillUnmount')
        clearInterval(this.stateChanger);
    }

    componentDidMount() {
        alert('componentDidMount')
        this.changeState();
    }

    render() {
        alert('Render')
        return (

            < div >
                <h1>Life Cycle Methods</h1>
            </div >
        )
    }
}