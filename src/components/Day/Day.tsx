import dayjs from "dayjs";
import { DayCss } from "../../style";

interface IDay {
  day: dayjs.Dayjs,
  isToday: boolean,
  active: boolean,
  setActiveDay: Function
}

const Day:React.FC<IDay> = ({day, isToday, active, setActiveDay}) => {
  return (
    <div css={DayCss.day(isToday, active)} onClick={() => setActiveDay(day)}>
      {day.format("DD/MM/YYYY")}
    </div>
  );
}

export default Day;
