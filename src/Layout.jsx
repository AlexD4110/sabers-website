import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path as necessary
import './css/Layout.css'; // Assuming you'll create a CSS file for styles

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
          <a href="https://www.instagram.com/ne_sabers/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>

          
        </div>
        <p>© 2025 New England Sabers All Rights Reserved.</p>
        <p className="footer-text">Website created by Alex Deane</p>
      </footer>
    </div>
  );
};

export default Layout;

