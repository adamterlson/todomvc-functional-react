import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

console.debugger = (...args) => {
    console.log(...args);
    debugger;
    return args[0];
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
