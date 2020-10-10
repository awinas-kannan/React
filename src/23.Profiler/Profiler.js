import React from 'react';

export class NewAccountReports extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            FromDate: '',
            ToDate: ''
        };
    }

    handleChange = e => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    
    render() {
        return (
            <div>
                <h2>Welcome to New Accounts Reports Component...</h2>
                <p>
                    <label>From Date : <input type="text" name="FromDate"
                        onChange={this.handleChange} value={this.state.FromDate}></input></label>
                </p>
                <p>
                    <label>To Date : <input type="text" name="ToDate"
                        onChange={this.handleChange} value={this.state.ToDate}></input></label>
                </p>
                <input type="submit" value="Generate"></input>
            </div>
        )
    }
}



export class LoansRepaymentReports extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Welcome to Loans Repayment Reports Component...</h2>
            </div>
        );
    }
}
