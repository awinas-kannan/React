import React from 'react'

// export function SalaryComponent(data) {

//     function changeSalary(e) {
//         data.onSalaryChange(e);
//     }

//     return (
//         <div style={{ border: '3px solid red', width: '500px' }}>
//             <h2>Welcome to Salary Component</h2>
//             <p>
//                 <label>Employee Salary :
//                        <input type="text" name="Salary" value={data.salary}
//                         onChange={changeSalary}></input>
//                 </label>
//             </p>
//         </div>
//     );
// }

//or 

// export const SalaryComponent = (data) => {
//     function changeSalary(e) {
//         data.onSalaryChange(e);
//     }

//     return (
//         <div style={{ border: '3px solid red', width: '500px' }}>
//             <h2>Welcome to Salary Component</h2>
//             <p>
//                 <label>Employee Salary :
//                        <input type="text" name="Salary" value={data.salary}
//                         onChange={changeSalary}></input>
//                 </label>
//             </p>
//         </div>
//     );
// }

//or
export const SalaryComponent = ({salary, onSalaryChange}) => {
    function changeSalary(e) {
        onSalaryChange(e);
    }

    return (
        <div style={{ border: '3px solid red', width: '500px' }}>
            <h2>Welcome to Salary Component</h2>
            <p>
                <label>Employee Salary :
                       <input type="text" name="Salary" value={salary}
                        onChange={changeSalary}></input>
                </label>
            </p>
        </div>
    );
}