import React, { Component } from 'react';
import './App.css';
//import Greet from './components/Greet'
// import Article from './components/Article'
// import Welcome from './components/Welcome'
// import IgnoreFirstChild from './components/IgnoreFirstChild'
// import Message from './components/Message'
// import Counter from './components/Counter'

// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import NameList from './components/NameList';
// import FragmentDemo from './components/FragmentDemo';
// import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
// import Form from './components/Form';

 class App extends Component {
  render (){
    return (
      <div className="App">
        {/* <Greet name={"Amber"} heroName={"Super flaquita"}>This is my girl</Greet>
        <Greet name={"Bruce"} heroName={"Batman"}><button>Submit</button></Greet>
        <br/>
        <NameList /> */}
        {/* <FragmentDemo /> */}
        {/* <HookMouse />
        <br/> */}
        <MouseContainer/>
       </div>
     );
   }
 }

 export default App;
