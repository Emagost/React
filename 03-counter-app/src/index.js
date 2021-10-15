import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './comp/CounterApp';
// import FirstApp from './FirstApp';


const divRoot = document.querySelector('#root');

ReactDOM.render(< CounterApp value={123} />, divRoot);