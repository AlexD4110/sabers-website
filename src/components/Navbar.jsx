import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for routing
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap'; // Import Image component from react-bootstrap

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* Logo as Home button */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <Image
            src="./images/Vernon.svg" // Update the path to the SVG file
            alt="Vernon Travel Basketball Logo"
            style={{ width: '80px', height: '80px', marginRight: '10px' }} // Adjust the size and margin of the logo
            fluid
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center"> {/* Center the text */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                style={{ padding: '10px', fontSize: '18px' }} // Reduce padding and increase font size
                to="/about"
              >
                <i className="fas fa-info-circle me-2"></i> {/* FontAwesome Icon */}
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                style={{ padding: '10px', fontSize: '18px' }} // Reduce padding and increase font size
                to="/pricing"
              >
                <i className="fas fa-tag me-2"></i> {/* FontAwesome Icon */}
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                style={{ padding: '10px', fontSize: '18px' }} // Reduce padding and increase font size
                to="/contact"
              >
                <i className="fas fa-envelope me-2"></i> {/* FontAwesome Icon */}
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              {/* Sign Up button */}
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link btn btn-light text-dark px-4 py-2 fw-bold active' : 'nav-link btn btn-light text-dark px-4 py-2 fw-bold')}
                style={{ borderRadius: '20px', marginTop: '10px' }} // Style for button, rounded corners
                to="/signup"
              >
                <i className="fas fa-user-plus me-2"></i> {/* FontAwesome Icon */}
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
