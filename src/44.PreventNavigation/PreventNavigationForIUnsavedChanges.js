import React, { useState } from 'react';
import '../index.css';
import { authentication } from './Constants'
import { Link, NavLink, Switch, Route, Redirect, Prompt } from 'react-router-dom';

function LogIn(props) {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    console.log(props);
    function changeLogInData(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    function onLogIn() {


        if (loginData.username === 'Awinas' && loginData.password === 'Awi') {
            authentication.onAuthentication();
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

function EditProfile() {

    let [isDataChanged, setDataChanged] = useState(false);

    let [userInfo, setUserInfo] = useState({
        firstName: 'Awinas',
        lastName: 'Kannan',
        userName: 'Awi',
        emailId: 'awinas270597@gmail.com',
        contactNo: '+91-7200****63'
    });


    function saveChanges() {
        setDataChanged(false);
    }

    function onUserDataChange(e) {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
        setDataChanged(true);
    }

    return (
        <div>
            <Prompt when={isDataChanged}
                message={() => "There are Some Unsaved Changes. Do you want to go Away?"}></Prompt>
            <h2>Welcome to Edit Profile...</h2>
            <p>
                <label>First Name : <input type="text" name="firstName"
                    onChange={onUserDataChange}
                    value={userInfo.firstName}></input></label>
            </p>
            <p>
                <label>Last Name : <input type="text" name="lastName"
                    onChange={onUserDataChange} value={userInfo.lastName}></input></label>
            </p>
            <p>
                <label>User Name : <input type="text" name="userName"
                    onChange={onUserDataChange}
                    value={userInfo.userName}></input></label>
            </p>
            <p>
                <label>Email ID : <input type="text" name="emailId"
                    onChange={onUserDataChange}
                    value={userInfo.emailId}></input></label>
            </p>
            <p>
                <label>Contact Number : <input type="text" name="contactNo"
                    onChange={onUserDataChange}
                    value={userInfo.contactNo}></input></label>
            </p>
            <button onClick={saveChanges}>Save</button>
        </div>
    );
}

function SecuredRoute(props) {
    console.log('<SecuredRoute> ' + props)

    return (
        <Route path={props.path} render={data => authentication.getLogInStatus() ? (
            <props.component {...data}></props.component>) :
            (<Redirect to={{ pathname: '/' }}></Redirect>)}></Route>
    )
}

export function PreventNavigator() {
    alert('Are we loading This component every time ?? No')
    return (
        <div>

            <h2>Welcome to App Component...</h2>
            <Link to="/">LogIn</Link>&nbsp;&nbsp;
            <NavLink to="/home" activeClassName="links">Home</NavLink>&nbsp;&nbsp;
            <NavLink to="/editprofile" activeClassName="links">Edit Profile</NavLink>

            <Switch>
                <Route exact path="/" component={LogIn}></Route>
                <SecuredRoute path="/home" component={Home}></SecuredRoute>
                <SecuredRoute path="/editprofile" component={EditProfile}></SecuredRoute>
            </Switch>

        </div>
    )
}
