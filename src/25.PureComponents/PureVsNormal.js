import React from 'react';

class PureComp extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            employee: {
                id: '1',
                name: 'awi',
                tech: 'react'
            }
        }

        setInterval(this.changeState, 2000);

    }

    changeState = () => {
        alert('PureComp -changeState ')
        this.setState({
            employee: this.state.employee
        })
    }
    componentDidMount() {
        alert('PureComp -componentDidMount ')
        this.changeState();
    }

    render() {
        alert('Pure component rendered')
        return (

            < div >
                <h1>Pure Component :</h1>
                <p> It is based on shallow comparision </p>
                <p>Though we are changing the state value each 2 sec , it will not be re-rendered</p>
                <p>Because , we are assigning in same value (address)</p>
                <p>In case of normal components ,it will be re-rendred even though we assign the same value</p>
            </div >
        )
    }
}

class NormComp extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            employee: {
                id: '1',
                name: 'awi',
                tech: 'react'
            }
        }

        setInterval(this.changeState, 2000);
    }

    changeState = () => {
        alert('NormComp -changeState ')
        this.setState({
            employee: this.state.employee
        })
    }

    componentDidMount() {
        alert('NormComp -componentDidMount ')
        this.changeState();
    }

    render() {
        alert('Normal component rendered')
        return (
            < div >
                <h1>Normal Component :</h1>
                <p>In case of normal components ,it will be re-rendred even though we assign the same value</p>
            </div >
        )
    }
}

export class PureVsNormalComp extends React.Component {

    render() {
        return (
            <React.Fragment>
                <PureComp />
                <NormComp />
            </React.Fragment>
        )
    }
}