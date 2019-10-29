import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/index';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<Home />, document.getElementById('root'));
