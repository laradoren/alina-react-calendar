import { useState } from 'react';
import css from './CalendarHeader.module.css';



function CalendarHeader() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <div className={css.calendarHeader}>
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
