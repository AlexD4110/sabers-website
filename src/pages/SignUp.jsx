// Signup.jsx
import React from 'react';

const Signup = () => {
  return (
    <div className="form-container" style={{
      width: '100%',
      maxWidth: '640px',
      margin: '0 auto',
      padding: '20px',
      minHeight: '100vh'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        AAU Program Registration
      </h1>
      
      <div style={{
        position: 'relative',
        paddingBottom: '140%', // Adjust based on your form's aspect ratio
        height: 0,
        overflow: 'hidden'
      }}>
        <iframe
          title="AAU Program Registration Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSett8YPNHP3GB6vztS3hvpbDGTF7RY_HKPH0Qb6Ixc6i480DA/viewform?embedded=true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          loading="lazy"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Signup;