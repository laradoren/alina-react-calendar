import dayjs from "dayjs";
import { CalendarCss } from "../../style";
import Day from "../Day/Day";
import React from "react";
interface ICalendar {
  month: dayjs.Dayjs[][];
}

const Calendar: React.FC<ICalendar> = ({ month }) => {
  
  return (
    <div css={CalendarCss.calendar}>
      {month.map((row, index) => {
        return row.map((day, i) => (
          <Day
            day={day}
            key={i}
            isFirstRow={index === 0}
          />
        ));
      })}
    </div>
  );
};

export default Calendar;
