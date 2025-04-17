import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing pages and components
import Home from './House/Pages/Home';
import About from './House/Pages/About';
import Contact from './House/Pages/Contact';
import Nav from './House/Nav';
import Login from './House/Pages/Login';
import HomeCliclk2 from './House/HomeClickEvent/HomeCliclk2';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/homeclick' element={<HomeCliclk2 />} />
      </Routes>
    </Router>
  );
};

export default App;
