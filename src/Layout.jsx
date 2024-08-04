import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path as necessary

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="container mt-5">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
