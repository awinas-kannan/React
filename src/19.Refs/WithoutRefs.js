import React from 'react';


export class WithoutReff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
    }

    increment = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }
    render() {
        alert('Rendering.....');
        return (
            <>
               
                    <label><b> Enter Quantity  </b></label>
                    <input type="text" value={this.state.quantity}></input>
                    <button type="submit" onClick={this.increment}> + </button>
                

            </>

        );
    }
}