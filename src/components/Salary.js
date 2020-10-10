import React from 'react';


export class Salary extends React.Component {
  constructor(props) {
    super(props);

  }

   updateSalary=()=>
  {
    
    let newSalary = parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)+parseInt(this.refs.sa.value);
    alert('salary updation called' + newSalary)
    this.props.callbackFunction(newSalary);
    
  }
  render() {
    return (<div>
      <h1>Salary breakdown ... </h1>
      <p> <label>Basic pay : <b><input type="text" ref="basic" defaultValue={this.props.basic} /> </b></label></p>
      <p> <label>HRA : <b><input type="text" ref="hra" defaultValue={this.props.hra} /> </b></label></p>
      <p> <label>Special Allowance : <b><input type="text" ref="sa" defaultValue={this.props.spl_allo} /></b></label></p>
      <button onClick={this.updateSalary}>Update new Salary | Parent Component updation</button>
    </div>);
  }
}
