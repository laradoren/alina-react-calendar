import dayjs from 'dayjs';
import { CalendarCss } from '../../style';
import CalendarBody from '../CalendarBody/CalendarBody';
import { css } from '@emotion/react';

interface ICalendar {
  month: dayjs.Dayjs[][]
}

const Calendar:React.FC<ICalendar> = ({month}) => {
  return (
    <div css={{ color: 'hotpink' }}>
      {month.map( (row, i ) => {
        return row.map(day => <>{day.format("DD/MM/YYYY")}</>)
      } )}
    </div>
  );
}

export default Calendar;
