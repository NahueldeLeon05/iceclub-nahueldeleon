import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //Toma el elemento root del html
root.render(
  /*Renderiza el app */
  <React.StrictMode>
    { <App /> } 
  </React.StrictMode>
);

