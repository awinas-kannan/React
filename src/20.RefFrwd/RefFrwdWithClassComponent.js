import React from 'react';

///**Forwaring ref itself as a param to funcion component */

const FuncRefForwd = React.forwardRef((props, ref) => {

    function testClick() {

        ref.elevatorNameRef.current.focus();

    }

    return (

        <button onClick={testClick}>Reference forwarding Using Function Comp</button>

    )

});


//ref cannot be sent as param to function component
const FuncRefComp = (input) => {

    function testClick() {

        input.allreferences.elevatorNameRef.current.focus();

    }

    return (

        <button onClick={testClick}>Reference Forwared as Param to Function comp</button>

    )

};

export class Elevator extends React.Component {

    constructor(props) {

        super(props);
        this.references = {
            elevatorNameRef: React.createRef(),
            elevatorSpeedRef: React.createRef(),
            elevatorLoadRef: React.createRef()
        }


    }
    render() {

        return (
            <div>
                <h2>Welcome to Elevator Ordering Screen...</h2>
                <p>
                    <label>Elevator Name : <input ref={this.references.elevatorNameRef} type="text"></input></label>
                </p>
                <p>
                    <label>Elevator Speed : <input ref={this.references.elevatorSpeedRef}  type="text"></input></label>
                </p>
                <p>
                    <label>Elevator Load : <input ref={this.references.elevatorLoadRef}  type="text"></input></label>
                </p>
                <Summary innerRef={this.references}></Summary>
                <FuncRefForwd ref={this.references}></FuncRefForwd>
                <FuncRefComp allreferences={this.references}></FuncRefComp>
            </div>
        );
    }

}

class Summary extends React.Component {
    constructor(props) {

        super(props);
    }
    handleNameFocus = () => this.props.innerRef.elevatorNameRef.current.focus();
    handleSpeedFocus = () => this.props.innerRef.elevatorSpeedRef.current.focus();
    handleLoadFocus = () => this.props.innerRef.elevatorLoadRef.current.focus();
    render() {

        return (

            <div>

                <h2>Summary Details...</h2>

                <p onClick={this.handleNameFocus}>
                    <label>Elevator Name : <b>Name - 1</b></label>
                </p>
                <p onClick={this.handleSpeedFocus}>
                    <label>Elevator Speed : <b>10 m/s</b></label>
                </p>
                <p  onClick={this.handleLoadFocus}>
                    <label>Elevator Load : <b>550 Kg</b></label>
                </p>

            </div>

        );

    }

}