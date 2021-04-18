import { withFormik } from 'formik';
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import { DisplayEmployeeList } from './10.listInReact/DispEmployeeList';
import { ShowAllEmployees } from './11.RestGetCall/EmployeeList';
import { SaveEmployee } from './12.RestPost/SaveEmployee';
import { EmpForm } from './13.Form.Formik/EmployeeForm';
import { FromikForm } from './13.Form.Formik/FormikEmployeeForm';
import { FromikYUPForm } from './14.FormikAndYup/FormikYUPEmployeeForm';
import { FromikComponentForm } from './15.FormikComponents/FormikComponentsForm';
import { FlipKart } from './16.LiftingState/TopLevelFlipkart';
import { WithoutReff } from './19.Refs/WithoutRefs';
import { LoginUsingRef, WithReff } from './19.Refs/WithRefs';
import { Elevator } from './20.RefFrwd/RefFrwdWithClassComponent';
import { AdminDashboard } from './21.HOC/HigherOrderComponents';
import { EmployeePortal } from './22.Portals/ShowandEditlEmployees';
import { ReportsDashboard } from './23.Profiler/ReportDashboard';
import { RenderProp } from './24.RenderProp/RenderProp';
import { PureVsNormalComp } from './25.PureComponents/PureVsNormal';
import { ComponentLifeCycleMethods } from './26.LifeCycle/LifecycleMethods';
import { StateManageMentwithClassComp } from './27.Hooks/StatesWithClassComp';
import { UseStateHook } from './27.Hooks/useStateHook';
import { MultipleImputStateHandler } from './28.UseStateWithMultipleInputs/UseStateHandlingForm';
import { EmployeeUseState } from './29.StateTransferWithUseState.js/Employee';
import { EmployeeUseEffectComponent } from './30.UseEffect/EmpUseEffect';
import { EmployeeUseEffectWithSateDependency } from './31.UseEffectWithDependency/UseEffectWithStateDependency';
import { UseEffectUnMount } from './32.UseEffectUnmount/UseEffectUnmountSetUnterval';
import { UseContextApp } from './33.UseContextHook/UseContextApp';
import { CustomHookAdminDashboard } from './35.CustomHooks/CustomHook';
import { SpeechConverter } from './36.ImportCustomHook/SpeechRecognizer';
import { MyRouterComponent } from './37.Routing/Router';
import { MyNavRouterComponent } from './39.Navlink/NavRouter';
import { DynamicUrlRouterComponent } from './40.ReactUrlParams/DynamicUrlRouter';
import { DynamicAndNestedUrlRouterComponent } from './41.NesterUrlRouter/DynamicAndNestedUrlRouter';
import { ProgramaticNavigator } from './42.ProgammaticNavigation/ProgmaticNavigator';
import { ProgramaticNavigatorWithProtectedRoute } from './43.ProtectedRoutes/ProgmaticNavigatorWithPortectedRoute';
import { PreventNavigator } from './44.PreventNavigation/PreventNavigationForIUnsavedChanges';
import { App } from './8.CommunicationWithContext/App';
import EmployeeDashboard from './components/EmployeeDashboard';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

/////WITH JSX

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//Single Elem rendering 
const elem = <h1> JSX Eelement Creation</h1>;

// ReactDOM.render(elem,document.getElementById('root'));

//Multiple element rendering
const multiElem = (
  <div>
    <h1> JSX Multiple Element Creation</h1>
    <h1> JSX Element Creation</h1>
  </div>
);
ReactDOM.render(multiElem, document.getElementById('root'));


//WITHOUT JSX
//type ,property ,childern
const elemWithoutJSX = React.createElement("h1", null, "Welcome to react without JSX");
//ReactDOM.render(elemWithoutJSX,document.getElementById('root'));

const devElemWithoutJSX = React.createElement("div", { className: "customBorder" },
  React.createElement("h1", null, "Welcome to react without JSX"),
  React.createElement("h1", null, "Understandong creation of elements  without JSX"));

ReactDOM.render(devElemWithoutJSX, document.getElementById('root'));





//React compontents //function componentes
//Start a react component with Capital letter. Otherwise it will not be displayed
function DisplayEmployeeDetails(employee) {
  return (
    <div>
      <p> <label>Employee Id : <b>{employee.id}</b></label></p>
      <p> <label>Employee Name : <b>{employee.name}</b></label></p>
      <p> <label>Employee Location :<b> {employee.loc}</b></label></p>
      <p> <label>Employee Salary :<b> {employee.sal}</b></label></p>
    </div>
  );
}

//user defined component (DisplayEmployeeDetails)
const componentElem = <DisplayEmployeeDetails id="1" name="awinas" loc="madurai" sal="25000"></DisplayEmployeeDetails>
ReactDOM.render(componentElem, document.getElementById('root'));

//Arrow function

var Department = (dept) => {
  return (
    <div>
      <p> <label>Dept name :<b> {dept.name}</b></label></p>
      <p> <label>Dept head :<b> {dept.head}</b></label></p>
    </div>
  );
}

var ArrowDisplayEmployeeDetails = (employee) => {
  return (
    <div>
      <h1>Employee Details ... </h1>
      <p> <label>Employee Id : <b>{employee.id}</b></label></p>
      <p> <label>Employee Name : <b>{employee.name}</b></label></p>
      <p> <label>Employee Location :<b> {employee.loc}</b></label></p>
      <p> <label>Employee Salary :<b> {employee.sal}</b></label></p>
      <Department name={employee.deptName} head={employee.head}></Department>
    </div>
  );
};


const ArrComponentElem = <ArrowDisplayEmployeeDetails id="1" name="awinas" loc="madurai" sal="25000" deptName="IT" head="Rajan"></ArrowDisplayEmployeeDetails>
ReactDOM.render(ArrComponentElem, document.getElementById('root'));


//React components // Class Compoents
export class Employee extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    //this.props.name="awi"; //Cannot assign to read only property 'name' of object '#<Object>'
  }
  render() {
    return (<div>
      <h1>Employee Details ... </h1>
      <p> <label>Employee Id : <b>{this.props.id}</b></label></p>
      <p> <label>Employee Name : <b>{this.props.name}</b></label></p>
      <p> <label>Employee Location :<b> {this.props.loc}</b></label></p>
      <p> <label>Employee Salary :<b> {this.props.sal}</b></label></p>
      <Dept name={this.props.deptName} head={this.props.head}></Dept>
    </div>)
  }

}

class Dept extends React.Component {
  render() {
    return (
      <div>
        <h1>Department Details ... </h1>
        <p> <label>Dept name :<b> {this.props.name}</b></label></p>
        <p> <label>Dept head :<b> {this.props.head}</b></label></p>
      </div>
    )
  }
}

const ClassComponentElem = <Employee id="1" name="awinas" loc="madurai" sal="25000" deptName="IT" head="Rajan"></Employee>
//ReactDOM.render(ClassComponentElem, document.getElementById('root'));

//States In react

//With out  the state , <p>Increased value =  {this.counter}</p> will not be dynamically changed
//whenever the state value is changes, component will be re-rendered
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.state = {
      statecounter: 0
    }
  }

  increaseCounter = () => {
    this.counter = this.counter + 1;
    this.setState({
      statecounter: this.state.statecounter + 1
    })
  }
  render() {
    alert('Render');
    return (
      <div>
        <p>Click to Increase Couter </p>
        <button onClick={this.increaseCounter}>Increase</button>
        <p>Increased value =  {this.counter}</p>
        <p>Increased state value =  {this.state.statecounter}</p>
      </div>
    )
  }
}
const counterComp = <Counter></Counter>
//ReactDOM.render(counterComp, document.getElementById('root'));


class CountChars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      counter: 10
    };

  }

  onInputMsgChnage(text) {
    this.setState({
      message: 'Input Message has ' + text.length + ' number of characters'
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to count charaters component </h2>
        <div>
          <label>Enter characters : </label>
          <input type="text" id="t1" onChange={e => this.onInputMsgChnage(e.target.value)}></input>
        </div>
        <p>
          <label>Message : {this.state.message} </label>
        </p>
        <p>
          <label>Counter : {this.state.counter} </label>
        </p>
      </div>
    )
  }
}
const stateComp = <CountChars></CountChars>
//ReactDOM.render(stateComp, document.getElementById('root'));

//7.Interation between react Components
//Sharing values between child to parent and parent to child

const interactionBetweenComponents = <EmployeeDashboard id="1" name="awi" loc="madurai" sal="50000" basic="20000" hra="20000" sa="10000"></EmployeeDashboard>

//ReactDOM.render(interactionBetweenComponents, document.getElementById('root'));


//8 Context

const AppContextInteration = <App></App>

//ReactDOM.render(AppContextInteration, document.getElementById('root'));


//10 List in react

const empListFC = <DisplayEmployeeList></DisplayEmployeeList>

//ReactDOM.render(empListFC, document.getElementById('root'));

//11.Rest Api call - window fetch


const restShowEmp = <ShowAllEmployees></ShowAllEmployees>
//ReactDOM.render(restShowEmp, document.getElementById('root'));

//12 -Rest Post  Save employee
const restAddEmp = <SaveEmployee></SaveEmployee>
//ReactDOM.render(restAddEmp, document.getElementById('root'));

//13 -React Form , Spread operator
//check console logs
const empForm = <EmpForm></EmpForm>
//ReactDOM.render(empForm, document.getElementById('root'));

//FromikForm
const empFormikForm = <FromikForm></FromikForm>
//ReactDOM.render(empFormikForm, document.getElementById('root'));

//Formik + YUP library
const empFormikYUPForm = <FromikYUPForm />
//ReactDOM.render(empFormikYUPForm, document.getElementById('root'));

//15 Formik components
const empFormikCompYUPForm = <FromikComponentForm />
//ReactDOM.render(empFormikCompYUPForm, document.getElementById('root'));



//16 Lifting state 17 Error boudires 18 fragments
const fkart = <FlipKart />
//ReactDOM.render(fkart, document.getElementById('root'));


//19 Refs
//componenet rendered on each button click
const withoutRef = <WithoutReff />
//ReactDOM.render(withoutRef, document.getElementById('root'));

//component rendered only once
const withRef = <WithReff />
//ReactDOM.render(withRef, document.getElementById('root'));

//

const LoginUsingRefElem = <LoginUsingRef />
//ReactDOM.render(LoginUsingRefElem, document.getElementById('root'));

//20 Ref forward

const refFrwdClasComp = <Elevator />
//ReactDOM.render(refFrwdClasComp, document.getElementById('root'));

//21/Higher Order components

const hocComp = <AdminDashboard />
//ReactDOM.render(hocComp, document.getElementById('root'));

//22/Portals
const portalComp = <EmployeePortal />
//ReactDOM.render(portalComp, document.getElementById('root'));

//23 Profiler
const profiler = <ReportsDashboard></ReportsDashboard>

//ReactDOM.render(profiler, document.getElementById("root"));

//24
const renderProp = <RenderProp></RenderProp>
//ReactDOM.render(renderProp, document.getElementById("root"));


//25 Pure Component
const pureVsNormal = <PureVsNormalComp />
//ReactDOM.render(pureVsNormal, document.getElementById("root"));

//26 Life cycle Methods
const life = <ComponentLifeCycleMethods />
//ReactDOM.render(life, document.getElementById("root"));


//27 . Hooks ->useStates

const stateManageMentwithClassComp = <><StateManageMentwithClassComp /> <UseStateHook /></>
ReactDOM.render(stateManageMentwithClassComp, document.getElementById("root"));

//28 useStates
const multipleInputHandleThroughState = <><MultipleImputStateHandler /> </>
//ReactDOM.render(multipleInputHandleThroughState, document.getElementById("root"));

//29 share state between parent and child using use state

//ReactDOM.render(<><EmployeeUseState /> </>, document.getElementById("root"));

//30 UseEffect


//ReactDOM.render(<EmployeeUseEffectComponent /> , document.getElementById("root"));

//31 useEffect with state dependency
//ReactDOM.render(<EmployeeUseEffectWithSateDependency /> , document.getElementById("root"));

//32 useEffect for unmounting

//ReactDOM.render(<UseEffectUnMount /> , document.getElementById("root"));

//33 34 useContext

//ReactDOM.render(<UseContextApp /> , document.getElementById("root"));

//35 custom Hooks
//ReactDOM.render(<CustomHookAdminDashboard /> , document.getElementById("root"));

//36
//ReactDOM.render(<SpeechConverter /> , document.getElementById("root"));


//37 ,38 Router & switch component

//ReactDOM.render(<BrowserRouter><MyRouterComponent/></BrowserRouter>, document.getElementById("root"));

//39 NavLink
//ReactDOM.render(<BrowserRouter><MyNavRouterComponent/></BrowserRouter>, document.getElementById("root"));

//40 Route dynamic url

//ReactDOM.render(<BrowserRouter><DynamicUrlRouterComponent/></BrowserRouter>, document.getElementById("root"));


//41 Nested Url 
//ReactDOM.render(<BrowserRouter><DynamicAndNestedUrlRouterComponent/></BrowserRouter>, document.getElementById("root"));

//42 Programmatic Navigation
//ReactDOM.render(<BrowserRouter><ProgramaticNavigator/></BrowserRouter>, document.getElementById("root"));

//43 Programmatic Navigation With Protected Routes
//ReactDOM.render(<BrowserRouter><ProgramaticNavigatorWithProtectedRoute/></BrowserRouter>, document.getElementById("root"));

//44 Prevent Navigation
//ReactDOM.render(<BrowserRouter><PreventNavigator/></BrowserRouter>, document.getElementById("root"));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();
