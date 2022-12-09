import dayjs from 'dayjs';
import { CalendarCss } from '../../style';
import Day from '../Day/Day';
import React from "react";
import { isDaysEqual } from '../../utils/utils';
interface ICalendar {
  month: dayjs.Dayjs[][],
  activeDay: dayjs.Dayjs,
  setActiveDay: Function
}

const Calendar:React.FC<ICalendar> = ({month, activeDay, setActiveDay}) => {
  return (
    <div css={CalendarCss.calendar}>
      {month.map( (row ) => {
        return row.map((day, i) => <Day day={day} key={i} isToday = {isDaysEqual(day)} active={isDaysEqual(day, activeDay)} setActiveDay={setActiveDay} />)
      } )}
    </div>
  );
}

export default Calendar;
