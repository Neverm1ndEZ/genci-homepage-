import React, { useState } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
  return (
    <div className=" font-sans">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar
          value={value}
          onChange={(newValue) => setValue(newValue)}
          style={{ backgroundColor: 'white', color: 'black' }}
          className="rounded-md overflow-scroll "
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
