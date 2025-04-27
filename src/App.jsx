import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './House/Nav';
import HomeCliclk2 from './House/HomeClickEvent/HomeCliclk2';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>

        <Route path="/homeclick" element={<HomeCliclk2 />} />
      </Routes>
    </>
  );
};

export default App;
