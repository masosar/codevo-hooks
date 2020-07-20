import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppNav from './AppNav';
import Hooks from './Hooks';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AppNav />, document.getElementById('myNav'));
ReactDOM.render(<Hooks />, document.getElementById('hooks'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
