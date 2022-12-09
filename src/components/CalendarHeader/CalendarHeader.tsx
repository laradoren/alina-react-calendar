import { useState } from 'react';

function CalendarHeader() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <div>
      <button>{"<<"}</button>
      <div>
        <div>{currentMonth}</div>
        <div>{currentYear}</div>
      </div>
      <button>{">>"}</button>

    </div>
  );
}

export default CalendarHeader;
