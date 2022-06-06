import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Sum, App } from './App';
import registerServiceWorker from './registerServiceWorker';

/*
import Sum from './App'
ReactDOM.render(<Sum />, document.getElementById('root'));
*/


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
