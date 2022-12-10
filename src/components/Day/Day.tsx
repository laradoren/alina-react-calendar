import React from "react";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { DayCss } from "../../style";
import { IDay, ITask } from "../../utils/types";
import { isDaysEqual } from "../../utils/utils";
import DayDetails from "../DayDetails/DayDetails";
import { CgMoreO } from "react-icons/cg";

const Day:React.FC<IDay> = ({day, isFirstRow}) => {
  const { activeDay, setActiveDay, filteredTasks } = useContext(GlobalContext);
  const [ dayTasks, setDayTasks ] = useState(filteredTasks);
  const [ detailModalShow, setDetailModalShow ] = useState(false);

  useEffect(() => {
    setDayTasks(filteredTasks.filter((task: ITask) => task.date === day.format("YYYY-MM-DD")))
  }, [filteredTasks, day]);

  const handleDetailModal = () => {
    setDetailModalShow(prev => !prev);
  }
  

  const isToday = isDaysEqual(day);
  const isActive = isDaysEqual(day, activeDay);
  return (
    <React.Fragment>
      <div css={DayCss.day(isToday, isActive)} onClick={() => setActiveDay(day)}>
        {isActive && <div css={DayCss.activeButton} onClick={handleDetailModal}> <CgMoreO /> </div>}
        {day.format("DD")}
        {isFirstRow && <div>{day.format("ddd")}</div>}
        <div css={DayCss.tasks}>{dayTasks.map((task: ITask) => <div key={task.id} css={DayCss.task(task.color)}>{task.label}</div>)}</div>
      </div>
      {detailModalShow && <DayDetails day={day} tasks={dayTasks} handleDetailModal={handleDetailModal} />}
    </React.Fragment>
  );
}

export default Day;
