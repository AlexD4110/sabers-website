import React from 'react';
import Register from '../Register';
import { motion } from 'framer-motion'; // Import framer-motion for animations

const SignUp = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start slightly below the final position with opacity 0
      animate={{ opacity: 1, y: 0 }} // Fade in and move to the final position
      transition={{ duration: 0.4, ease: 'easeOut' }} // Quick, smooth transition
    >
      <Register />
    </motion.div>
  );
};

export default SignUp;
