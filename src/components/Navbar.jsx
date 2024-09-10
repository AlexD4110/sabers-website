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
            style={{ width: '70px', height: '70px' }} // Adjust the size of the logo
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/pricing"
              >
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              {/* Sign Up button */}
              <NavLink
                className="nav-link btn btn-light text-dark px-3 fw-bold"
                to="/signup"
              >
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
