import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './comp/CounterApp';
//import FirstApp from './comp/FirstApp';

const divRoot = document.querySelector('#root');


//ReactDOM.render(< FirstApp saludo="Hola Emanuel" />, divRoot);
ReactDOM.render(< CounterApp/>, divRoot);