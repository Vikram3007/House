// src/App.jsx ✅ (DO NOT wrap again here)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './House/Nav';
import Home from './House/Pages/Home';
import About from './House/Pages/About';
import Contact from './House/Pages/Contact';
import HomeClick2 from './House/HomeClickEvent/HomeCliclk2';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/homeclick" element={<HomeClick2 />} />
      </Routes>
    </>
  );
};

export default App;
