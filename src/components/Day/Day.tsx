import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { DayCss } from "../../style";
import { isDaysEqual } from "../../utils/utils";

interface IDay {
  day: dayjs.Dayjs,
  isFirstRow: boolean,
}

const Day:React.FC<IDay> = ({day, isFirstRow}) => {
  const { activeDay, setActiveDay } = useContext(GlobalContext);
  const isToday = isDaysEqual(day);
  const isActive = isDaysEqual(day, activeDay);
  return (
    <div css={DayCss.day(isToday, isActive)} onClick={() => setActiveDay(day)}>
      {day.format("DD")}
      {isFirstRow && <div>{day.format("ddd")}</div>}
    </div>
  );
}

export default Day;
