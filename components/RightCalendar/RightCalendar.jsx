import React, { useRef } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import ServerDay from './ServerDay'; // Import the ServerDay component

function DateCalendarServerRequest() {
  const demoData = [
    { text: 'Task 1', date: '2023-08-20' },
    { text: 'Task 2', date: '2025-08-30' },
    { text: 'Task 3', date: '2023-08-26' },
  ];

  const highlightedDates = demoData.map((obj) => obj.date);

  const calendarRef = useRef();

  const handleYearChange = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollTo(0, 0);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        ref={calendarRef}
        onYearChange={handleYearChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: (props) => <ServerDay {...props} demoData={demoData} />,
        }}
        slotProps={{
          day: {
            highlightedDays: highlightedDates,
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default DateCalendarServerRequest;
