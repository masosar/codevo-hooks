import React, { Component } from 'react';
import './App.css';
import Message from './components/Message';
import GreetDestr1 from './components/GreetDestr1';
import GreetDestr2 from './components/GreetDestr2';
// import Article from './components/Article'
// import Welcome from './components/Welcome'
// import IgnoreFirstChild from './components/IgnoreFirstChild'
// import Message from './components/Message'
// import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import SecondClick from './components/SecondClick';
import ProtoNameList from './components/ProtoNameList';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import NameList from './components/NameList';
// import Form from './components/Form';
import StyleSheet from './components/StyleSheet';
import RfTable from './components/RfTable';
import HookCounterOne from './components/HookCounterOne';



 class AppNav extends Component {
  render (){
    return (
      <div className="AppNav">
        <StyleSheet primary={true} />
        <Message />
        <br />
        Destructuring Props in the parameters of the function
        <GreetDestr1 name={"Amber Vianey"} heroName={"Mamacita"} />
        <br />
        Destructturing props in the body of the function
        <GreetDestr2 name={"Joy"} heroName={"JoJo"} />
        <br />
        <FunctionClick />
        <br />
        <SecondClick />
        <br />
        <ProtoNameList/>
        <RfTable />
        <br/>
        <HookCounterOne />
        
       </div>
     );
   }
 }

 export default AppNav;
