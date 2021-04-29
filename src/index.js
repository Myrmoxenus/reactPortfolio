import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavbarAndRouter from './NavbarAndRouter';
import Footer from './Footer'


ReactDOM.render(
  <React.StrictMode>
    <NavbarAndRouter />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
