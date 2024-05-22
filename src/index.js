import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Callback from "./callback";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routing = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/callback" element={<Callback />}></Route> 
    </Routes>
  </BrowserRouter>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

