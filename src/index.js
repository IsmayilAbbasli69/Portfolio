import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

 ReactDOM.render(
 <BrowserRouter>
 <App/>
 </BrowserRouter>
 ,document.getElementById('root'));

