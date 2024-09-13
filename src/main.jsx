import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Icons from './Components/Icons/Icons';
import CustomScroll from './Components/CustomScroll/CustomScroll';
import BtnDarkMode from './Components/BtnDarkMode/BtnDarkMode'
import { Provider } from 'react-redux';
import { store } from './Redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Icons />
      <App />
      <CustomScroll />
      <BtnDarkMode />
    </BrowserRouter>
  </Provider>
)
