import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< Updated upstream
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {UserProvider} from './context/UserContext'
import reportWebVitals from "./reportWebVitals";
>>>>>>> Stashed changes

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();