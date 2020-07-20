import React, { Component } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import UseStateEx from './components/UseStateEx';
import Bulb from './components/Bulb';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import IntervalHookCounter from './components/IntervalHookCounter';

const items = [
    {
        id: 1,
        title: 'What is React?',
        content: 'Something'
    },
    {
        id: 2,
        title: 'Why to use React?',
        content: 'Cool JS library'
    },
    {
        id: 3,
        title:'How to Use it?',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem tempore, ex perferendis accusantium, error facere est ducimus, illum recusandae harum reprehenderit deleniti reiciendis repellat? Voluptatem error voluptate nulla iste architecto!Facilis veritatis fugit aut! Illo vel minima hic sequi vero laboriosam maiores est, nemo aliquid inventore expedita reprehenderit impedit nulla? Ratione nostrum culpa, repellat maxime atque iure illo! Qui, incidunt.'
    }
    
]

 class Hooks extends Component {
  render (){
    return (
      <div className="App">
        <Accordion items={items} />
        <UseStateEx />
        <br/>
        <Bulb/>
        <br/>
        <HookCounterThree/>
        <br/>
        <HookCounterFour />
        <br/>
        <IntervalHookCounter />
      </div>
     );
   }
 }

 export default Hooks;
