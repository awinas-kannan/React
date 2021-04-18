import React, { useState } from 'react';

export function UseStateHook() {

    //A component is changing an uncontrolled input of type text to be controlled error in ReactJS
    //if initial value is not assigned ,then above err will be in logs
    //const [stateFullName, setName] = useState();

    //stateFullName -->State Property name {like this.state,stateFullName}
    //setName --> function that modifies the property

    const [stateFullName, setName] = useState('awi');

    // changeName = (e) => {
    //     setName(e.target.value)
    // }

    function changeName(e) {
        setName(e.target.value)
    }

    return (
        <div>
            <h2>Welcome to UseStateHook Employee Component...</h2>
            <p>
                <label>Employee Name :
              <input type="text" value={stateFullName} onChange={changeName}></input>
                </label>
            </p>
            <p>
                Entered Name is : <b>{stateFullName}</b>
            </p>
        </div>
    )

}