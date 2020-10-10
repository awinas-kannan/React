import React, { Profiler } from 'react';
import { LoansRepaymentReports, NewAccountReports } from './Profiler';

export class ReportsDashboard extends React.Component {

    constructor(props) {

        super(props);

    }

    log = (id, phase, actualDuration, baseDuration, startTime,

        commitTime, interaction) => {

        console.log('Id is : ' + id + ', Phase is : ' + phase);

        console.log('Actual Duration is : ' + actualDuration + ' and Base Duration is :' + baseDuration);

        console.log('startTime is : ' + startTime + ', commitTime is : ' + commitTime);

        //console.log('interaction is : ' + interaction );
    }

    render() {

        return (

            <React.Fragment>

                <h2>Welcome to Reports Dashboard...</h2>
                <Profiler id='NewAccountReports' onRender={this.log}>
                    <NewAccountReports></NewAccountReports>
                </Profiler>
                <Profiler id='LoansRepaymentReports' onRender={this.log}>
                    <LoansRepaymentReports></LoansRepaymentReports>
                </Profiler>
            </React.Fragment>

        );

    }

}