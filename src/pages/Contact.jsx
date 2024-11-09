import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }} // Reduced starting position for a subtle effect
      animate={{ opacity: 1, x: 0 }} // Fade in and slide to the center
      exit={{ opacity: 0, x: 10 }} // Subtle exit animation to the right
      transition={{ duration: 0.3 }} // Shorter duration for a quicker, less noticeable transition
    >
      <Contact />
    </motion.div>
  );
};

export default contact;
