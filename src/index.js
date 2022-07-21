import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Comps
import Games from './Components/Games';
import Lacum from './Components/sc/Lacum';
import About from './Components/About';
import Jobs from './Components/Jobs';
import BetaTester from './Components/BetaTester';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="games" element={<Games />} />
      <Route path="about" element={<About />} />
      <Route path="games/lacum" element={<Lacum />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="betatester" element={<BetaTester/>} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
