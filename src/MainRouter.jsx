import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Home page
import About from './pages/About'; // About page
import Rosters from './pages/Rosters'; // Rosters page
import Pricing from './pages/Pricing'; // Pricing page
import Contact from './pages/Contact'; // Contact page
import SignUp from './pages/SignUp'; // Sign Up page

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/rosters" element={<Rosters />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default MainRouter;
