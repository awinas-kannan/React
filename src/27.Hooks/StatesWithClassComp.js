import React from 'react'

export class StateManageMentwithClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: ''
        }
    }
    changeName = (e) => {
        this.setState({ Name: e.target.value });
    }
    render() {
        return (
            <div>
                <h2>Welcome to Employee Component...</h2>
                <p>
                    <label>Employee Name :
                      <input type="text" value={this.state.Name} onChange={this.changeName}></input>
                    </label>
                </p>
                <p>
                    Entered Name is : <b>{this.state.Name}</b>
                </p>
            </div>
        )
    }
}