import React from 'react';
import {render} from 'react-dom';
import './index.css';

import App from './App';
import Live from './pages/Live';
import Spillere from './pages/Spillere';
import Nyheter from './pages/Nyheter';
import FooterComp from "./components/FooterComp"

// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from './NotFound';

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='Live' element={<Live />} />
        <Route path='Spillere' element={<Spillere />} />
        <Route path='Nyheter' element={<Nyheter />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <FooterComp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
