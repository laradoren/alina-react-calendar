import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { DayCss } from "../../style";
import { IDay, ITask } from "../../utils/types";
import { isDaysEqual } from "../../utils/utils";

const Day:React.FC<IDay> = ({day, isFirstRow}) => {
  const { activeDay, setActiveDay, savedTasks } = useContext(GlobalContext);
  const [ dayTasks, setDayTasks ] = useState(savedTasks);

  useEffect(() => {
    setDayTasks(savedTasks.filter((task: ITask) => task.date === day.format("YYYY-MM-DD")))
  }, [savedTasks, day])
  

  const isToday = isDaysEqual(day);
  const isActive = isDaysEqual(day, activeDay);
  return (
    <div css={DayCss.day(isToday, isActive)} onClick={() => setActiveDay(day)}>
      {day.format("DD")}
      {isFirstRow && <div>{day.format("ddd")}</div>}
      <div css={DayCss.tasks}>{dayTasks.map(task => <div css={DayCss.task(task.color)}>{task.label}</div>)}</div>
    </div>
  );
}

export default Day;
