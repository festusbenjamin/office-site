import React from "react";
import "./index.css";
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </>
  );
}

export default App;
