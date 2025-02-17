import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App'; // Home page
import About from './pages/About'; // About page
import Board from './pages/Board'; // Board page
import Rosters from './pages/Rosters'; // Rosters page
import Pricing from './pages/Pricing'; // Pricing page
import Contact from './pages/Contact'; // Contact page

function MainRouter() {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<Board />} />
        <Route path="/rosters" element={<Rosters />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
  );
}

export default MainRouter;
