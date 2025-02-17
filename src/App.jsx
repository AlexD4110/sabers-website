import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import Jumbotron from './components/Jumbotron';
import CarouselComponent from './components/Carousel';
import Layout from './Layout';
import About from './pages/About';
import Board from './pages/Board';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Signup from './pages/SignUp';
import AuthProvider from './context/AuthContext';
import EventsAndFlyers from './pages/EventsAndFlyers';
import ErrorBoundary from './components/ErrorBoundary';
import { Toast, Button } from 'react-bootstrap';
import CalendarPage from './pages/CalendarPage';

function HomePageWithToast() {
  const [showToast, setShowToast] = useState(true);
  const navigate = useNavigate();

  const handleToastClick = () => {
    setShowToast(false);
    navigate('/register');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Fade in and slide up for a smooth entrance
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }} // Adjust duration and easing for smoothness
    >
      {/* Jumbotron and Carousel Components */}
      <div id="Important Information">
        <Jumbotron />
      </div>
      <div id="Carousel" className="mt-5">
        <CarouselComponent />
      </div>
      <div></div>
      {/* Toast Component */}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 5 }}>
        <Toast show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Header>
            <strong className="me-auto">Important Information</strong>
            <small>Just Now</small>
          </Toast.Header>
          <Toast.Body>
            Join us today! <br />
            <Button variant="primary" size="sm" onClick={handleToastClick}>
              Tryout Registration!
            </Button>
          </Toast.Body>
        </Toast>
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomePageWithToast />} />
              <Route path="/about" element={<About />} />
              <Route path="/board" element={<Board />} />
              <Route path="/events" element={<EventsAndFlyers />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/calendar" element={<CalendarPage />} />
            </Routes>
          </ErrorBoundary>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
