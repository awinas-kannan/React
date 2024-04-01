import React from 'react';
import ReactDOM from 'react-dom';
import { DisplayEmployeeList } from '../10.listInReact/DispEmployeeList';

export class ComponentLifeCycleMethods extends React.Component {
    stateChanger = null;
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
        this.stateChanger = setInterval(this.changeState, 2000);

    }

    //Even after another component is rendered after count =3
    //the setInterval method is called.
    //TO avoid this we nee to unmount setInterval
    //uncomment componentWillUnmount to see this
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

    shouldComponentUpdate(nextProps, nextState) {
        alert('shouldComponentUpdate');
        console.log({ nextState, nextProps });
        // Check if the count is divisible by 2


        // if (nextState.count % 2 === 0) {
        //     return true; // Allow re-render if count is even
        // }
        // return false; // Prevent re-render if count is odd
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        // Log a message whenever the count updates
        alert('componentDidUpdate');
        console.log({ prevState, prevProps });
        console.log(`Count updated from ${prevState.count} to ${this.state.count}`);
    }

    componentDidMount() {
        alert('componentDidMount')
        this.changeState();
    }

    render() {
        alert('Render')
        return (

            < div >
                {alert('Inside Return IN render')}
                <h1>Life Cycle Methods</h1>
            </div >
        )
    }
}