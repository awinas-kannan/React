import React from 'react';


export class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <EmployeeReports></EmployeeReports>
                <LaptopReports></LaptopReports>
            </React.Fragment>
        );

    }

}

function reportsHOC(inputDates) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                'header': inputDates.header,
                'columns': inputDates.columns,
                'fetchedDatas': []
            }
        }

        componentDidMount() {
            fetch(inputDates.Url)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            fetchedDatas: result
                        });
                    }
                );
        }
        render() {
            return (
                <Data inputs={this.state}></Data>
            )
        }
    }
}
class Data extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>{this.props.inputs.header}</h2>
                <table>
                    <thead>
                        <tr>
                            {
                                // this.props.inputs.columns.map((col) => { return <th>{col}</th> })
                                this.props.inputs.columns.map((col) => <th>{col}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.inputs.fetchedDatas.map((row) => {
                            return (
                                <tr key={row.id}>
                                    {this.props.inputs.columns.map((col) => {
                                        return (
                                            <td>{row[col]}</td>
                                        )
                                    })}

                                </tr>
                            )
                        })}

                        {/* or */}
                        {/* {this.props.inputs.fetchedDatas.map((row) => (
                            <tr key={row.id}>
                                {this.props.inputs.columns.map((col) => <td>{row[col]}</td>)}
                            </tr>
                        )
                        )} */}
                    </tbody>
                </table>
            </div>
        )
    }
}


const EmployeeReports = reportsHOC(

    {
        Url: 'http://localhost:8080/getAllEmployee',

        columns: ['id', 'name', 'tech'], header: 'Employee Data'
    });



const LaptopReports = reportsHOC({
    Url: 'http://localhost:8080/getAllLaptops',

    columns: ['laptopId', 'brand', 'ram', 'harddiskSize'], header: 'Laptop Data'
});