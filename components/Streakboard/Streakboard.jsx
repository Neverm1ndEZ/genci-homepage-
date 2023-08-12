import React from 'react';
import ContributionsCalendar from './ContributionsCalendar';

export default function Streakboard() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center m-10">
        <h1 className="text-2xl font-bold mb-4">
          GitHub Contributions Calendar
        </h1>
        <ContributionsCalendar />
      </div>
    </div>
  );
}
