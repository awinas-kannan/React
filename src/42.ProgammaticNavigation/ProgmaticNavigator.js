import React, { useState } from 'react';
import '../index.css';
import { Link, NavLink, Switch, Route } from 'react-router-dom';

function LogIn(props) {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    console.log(props);
    function changeLogInData(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    function onLogIn() {


        if (loginData.username === 'Awinas' && loginData.password === 'Awi') {
            props.history.push('/home');
        }
        else {
            alert('Invalid UserName or PassWord');
        }

    }

    return (
        <div>
            <h2>Welcome to LogIn...</h2>
            <p>
                <label>UserName : <input type="text" value={loginData.username}
                    name="username" onChange={changeLogInData}></input></label>
            </p>
            <p>
                <label>PassWord : <input type="text" value={loginData.password}
                    name="password" onChange={changeLogInData}></input></label>
            </p>
            <button onClick={onLogIn}>LogIn</button>
        </div>
    )
}

function Home(props) {
    console.log(props);
    function onNext() {
        props.history.replace('/editprofile');
    }
    return (
        <div>
            <h2>Welcome to Home...</h2>
            <button onClick={onNext}>Next</button>
        </div>
    );
}
function EditProfile(prop) {
    console.log(prop);
    return (
        <div>
            <h2>Welcome to Edit Profile...</h2>
        </div>
    );
}

export function ProgramaticNavigator() {
    return (
        <div>
            <h2>Welcome to App Component...</h2>
            <Link to="/">LogIn</Link>&nbsp;&nbsp;
            <NavLink to="/home" activeClassName="links">Home</NavLink>&nbsp;&nbsp;
            <NavLink to="/editprofile" activeClassName="links">Edit Profile</NavLink>

            <Switch>
                <Route exact path="/" component={LogIn}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/editprofile" component={EditProfile}></Route>
            </Switch>

        </div>
    )
}
