import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path as necessary
import './Layout.css'; // Assuming you'll create a CSS file for styles

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="container mt-5">
          {children}
        </div>
      </main>
      <footer className="footer mt-5">
        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=100093485093274" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://x.com/VernonBBall" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p>© 2024 Vernon Travel Basketball Co. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

