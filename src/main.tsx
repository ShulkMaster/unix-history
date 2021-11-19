import {Boot} from './components/Boot/Boot';
import {Header} from './components/header/Header';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Boot/>
  </React.StrictMode>,
  document.getElementById('root'),
);
