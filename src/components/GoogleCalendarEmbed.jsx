// src/components/GoogleCalendarEmbed.jsx
import React from 'react';

const GoogleCalendarEmbed = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=sabersbasketball2025%40gmail.com&ctz=America%2FNew_York"
        style={{ border: '0' }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default GoogleCalendarEmbed;
