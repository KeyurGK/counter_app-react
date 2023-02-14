import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './card-styles.css'
import Header from "./Header";
import Social from "./Social";
import MainContent from './MainContent';
import Footer from './Footer';
import App from './App';
import Practise from './counter';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
