import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Icons from './Components/Icons/Icons';
import CustomScroll from './Components/CustomScroll/CustomScroll';
import BtnDarkMode from './Components/BtnDarkMode/BtnDarkMode'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Icons />
    <App />
    <CustomScroll />
    <BtnDarkMode />
  </BrowserRouter>
)
