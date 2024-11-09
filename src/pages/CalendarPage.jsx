// src/pages/CalendarPage.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import GoogleCalendarEmbed from '../components/GoogleCalendarEmbed';

const CalendarPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly below the final position
      animate={{ opacity: 1, y: 0 }} // Fade in and move to final position
      transition={{ duration: 0.4 }} // Set a quick transition duration for subtlety
      style={{ textAlign: 'center' }}
    >
      <h1>Vernon Travel Basketball Practice Master Schedule</h1>
      <GoogleCalendarEmbed />
    </motion.div>
  );
};

export default CalendarPage;
