// src/components/GoogleCalendarEmbed.jsx
import React from 'react';

const GoogleCalendarEmbed = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=8d415a1e255f41d65b509782e96f33a3e9c1873cb1347a831e66ad9d9063037a%40group.calendar.google.com&ctz=America%2FNew_York"
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
