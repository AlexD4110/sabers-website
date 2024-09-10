import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Jumbotron from './components/Jumbotron';
import CarouselComponent from './components/Carousel';
import Layout from './Layout';
import Register from './Register';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import AuthProvider from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import { Toast, Button, Image} from 'react-bootstrap'; // Import Toast and Button from react-bootstrap




function HomePageWithToast() {
  const [showToast, setShowToast] = useState(true); // State to manage toast visibility
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Function to handle toast click and navigate to Register
  const handleToastClick = () => {
    setShowToast(false); // Hide the toast
    navigate('/Register'); // Navigate to the register page
  };

  return (
    <>
      

      {/* Jumbotron and Carousel Components */}
      <div id="Important Information">
        <Jumbotron />
      </div>
      <div id="Carousel" className="mt-5">
        <CarouselComponent />
      </div>

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
    </>
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
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </ErrorBoundary>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
