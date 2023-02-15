import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';

const basename = document.querySelector('base')?.getAttribute('href') ?? '/';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Router basename={basename}>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
