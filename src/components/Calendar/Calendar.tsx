import { CalendarCss } from "../../style";
import Day from "../Day/Day";
import React from "react";
import { ICalendar } from "../../utils/types";


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
