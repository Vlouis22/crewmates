import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Navbar } from './Navbar.js';
import {Home} from './pages/Home.js';
import {CreateCrewmate} from './pages/CreateCrewmate.js'
import {Gallery} from './pages/Gallery.js'
import {Nopage} from './pages/Nopage.js'
import { Detail } from './pages/Detail.js';
import { Edit } from './pages/Edit.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="createcrewmate" element={<CreateCrewmate />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
