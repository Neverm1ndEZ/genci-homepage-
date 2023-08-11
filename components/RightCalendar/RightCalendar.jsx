import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventForm from './EventForm';

const RightCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleEventAdd = (newEvent) => {
    setEvents([...events, newEvent]);
    setIsModalOpen(false);
  };

  const handleEventDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateHasEvent = events.some(
        (event) => event.start.toDateString() === date.toDateString()
      );
      if (dateHasEvent) {
        return (
          <div
            style={{
              backgroundColor: 'blue',
              borderRadius: '50%',
              width: '10px',
              height: '10px',
            }}
          ></div>
        );
      }
    }
    return null;
  };

  const selectedEvents = events.filter(
    (event) => event.start.toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="bg-gray-100 scale-[80%] flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4">
        <div>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileContent={tileContent}
            className=" p-4 rounded-lg shadow-md"
          />
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Events on {selectedDate.toDateString()}
              </h2>
              <ul>
                {selectedEvents.map((event, index) => (
                  <li key={index} className="mb-1">
                    {event.title}
                    <button
                      onClick={() => handleEventDelete(index)}
                      className="bg-red-500 text-white px-2 py-1 ml-2 rounded-md hover:bg-red-600"
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
              <EventForm
                selectedDate={selectedDate}
                onEventAdd={handleEventAdd}
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightCalendar;
