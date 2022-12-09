import CalendarBody from '../CalendarBody/CalendarBody';
import CalendarHeader from '../CalendarHeader/CalendarHeader';
import css from './Calendar.module.css';

function Calendar() {
  return (
    <div className={css.calendar}>
      <CalendarHeader />
      <CalendarBody />
    </div>
  );
}

export default Calendar;
