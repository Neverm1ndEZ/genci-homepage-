import React, { useState } from 'react';

const EventForm = ({ selectedDate, onEventAdd }) => {
  const [eventTitle, setEventTitle] = useState('');

  const handleEventTitleChange = (e) => {
    setEventTitle(e.target.value);
  };

  const handleAddEvent = () => {
    if (eventTitle) {
      const newEvent = {
        title: eventTitle,
        start: selectedDate,
      };

      onEventAdd(newEvent);
      setEventTitle('');
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md z-10">
      <input
        type="text"
        placeholder="Event Title"
        value={eventTitle}
        onChange={handleEventTitleChange}
        className="w-full p-2 rounded-md border focus:ring-2 focus:ring-indigo-500 mb-2"
      />
      <button
        onClick={handleAddEvent}
        className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
      >
        Add Event
      </button>
    </div>
  );
};

export default EventForm;
