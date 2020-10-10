import React, { useEffect, useState } from 'react';


export function CustomHookAdminDashboard() {

    return (
        <React.Fragment>
            <CustomHookEmployeeReports />
            <CustomHookLaptopReports />
        </React.Fragment>
    );

}

export function CustomHookEmployeeReports() {
    return useList(
        {
            url: 'http://localhost:8080/getAllEmployee',

            columns: ['id', 'name', 'tech'], header: 'Employee Data',
            dyamicUrl:'Employee'
        });
}
export function CustomHookLaptopReports() {
    return useList({
        url: 'http://localhost:8080/getAllLaptops',

        columns: ['laptopId', 'brand', 'ram', 'harddiskSize'], header: 'Laptop Data',
        dyamicUrl:'Laptop'
    });
}
//CustomHook
function useList(inputs) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(inputs.url)
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                }
            );
    },[]);
    console.log(data)

    return <Data fetchedDatas={data} header={inputs.header} columns={inputs.columns} dyamicUrl={inputs.dyamicUrl}></Data>;
}

function Data(inputs) {
    const dynamicUrl = '/'+inputs.dyamicUrl+'/';
    return (
        <div>
            <h2>{inputs.header}</h2>
            <table>
                <thead>
                    <tr key='header'>
                        {
                            inputs.columns.map((col) => <th>{col}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {inputs.fetchedDatas.map((row) => {
                        return (
                            <tr key={row.id}>
                                {inputs.columns.map((col) => {
                                    return (
                                        <td>{row[col]}</td>
                                    )
                                })}
                                {/* Adding below code for 40. dynamic url */}
                                <td><a href={dynamicUrl+row.id} >Edit</a></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )

}

