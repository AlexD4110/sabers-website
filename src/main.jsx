import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter from './MainRouter'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);
