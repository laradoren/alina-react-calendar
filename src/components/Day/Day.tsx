import dayjs from "dayjs";
import { DayCss } from "../../style";

interface IDay {
  day: dayjs.Dayjs,
  isToday: boolean,
  active: boolean,
  setActiveDay: Function,
  isFirstRow: boolean,
}

const Day:React.FC<IDay> = ({day, isToday, active, setActiveDay, isFirstRow}) => {
  return (
    <div css={DayCss.day(isToday, active)} onClick={() => setActiveDay(day)}>
      {day.format("DD")}
      {isFirstRow && <div>{day.format("ddd")}</div>}
    </div>
  );
}

export default Day;
