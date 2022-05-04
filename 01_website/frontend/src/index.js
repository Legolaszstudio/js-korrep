import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const isProd = false;
export const apiAddress = isProd ? 'https://korrep.novy.vip/api' : 'http://localhost:5123';