import dayjs from "dayjs";
import { DayCss } from "../../style";

interface IDatePicker {
  day: dayjs.Dayjs,
  isToday: boolean,
  active: boolean,
  setActiveDay: Function
}

const DatePicker:React.FC<IDatePicker> = ({day, isToday, active, setActiveDay}) => {
  return (
    <div css={DayCss.day(isToday, active)} onClick={() => setActiveDay(day)}>
      {day.format("DD/MM/YYYY")}
    </div>
  );
}

export default DatePicker;
