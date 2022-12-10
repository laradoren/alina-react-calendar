import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { DayCss } from "../../style";
import { IDay, ITask } from "../../utils/types";
import { isDaysEqual } from "../../utils/utils";

const Day:React.FC<IDay> = ({day, isFirstRow}) => {
  const { activeDay, setActiveDay, filteredTasks } = useContext(GlobalContext);
  const [ dayTasks, setDayTasks ] = useState(filteredTasks);

  useEffect(() => {
    setDayTasks(filteredTasks.filter((task: ITask) => task.date === day.format("YYYY-MM-DD")))
  }, [filteredTasks, day])
  

  const isToday = isDaysEqual(day);
  const isActive = isDaysEqual(day, activeDay);
  return (
    <div css={DayCss.day(isToday, isActive)} onClick={() => setActiveDay(day)}>
      {day.format("DD")}
      {isFirstRow && <div>{day.format("ddd")}</div>}
      <div css={DayCss.tasks}>{dayTasks.map((task: ITask) => <div css={DayCss.task(task.color)}>{task.label}</div>)}</div>
    </div>
  );
}

export default Day;
