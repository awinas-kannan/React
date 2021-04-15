import React from 'react';


export class WithReff extends React.Component {
    constructor(props) {
        super(props);
        this.quantity = React.createRef();
        
    }

    increment = () => {
        this.quantity.current.value++;
    }
    render() {
        alert('Rendering.....');
        return (
            <>

                <label><b> Enter Quantity  </b></label>
                <input type="text" ref={this.quantity}></input>
                <button type="submit" onClick={this.increment}> + </button>


            </>

        );
    }
}

export class LoginUsingRef extends React.Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.password = React.createRef();
    }
    componentDidMount(){
        this.name.current.focus();
    }
    log = () => {
        alert(this.name.current.value + ' ' + this.password.current.value)
    }

    render() {
        return (
            <>
                <p>
                    <label><b> Enter name  </b></label>
                    <input type="text" ref={this.name}></input>
                </p>
                <p>
                    <label><b> Enter password  </b></label>
                    <input type="password" ref={this.password}></input>
                </p>
                <button type="submit" onClick={this.log}> Login</button>


            </>

        );
    }

}