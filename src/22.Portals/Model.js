import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

export class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            ReactDOM.createPortal(
                <div className="modal">
                    <button onClick={this.props.close}>X</button>

                    {this.props.children}

                </div>, document.body)
        );
    }
}
