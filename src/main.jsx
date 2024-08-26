import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Icons from './Components/Icons/Icons';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Icons />
    <App />
  </BrowserRouter>
)
