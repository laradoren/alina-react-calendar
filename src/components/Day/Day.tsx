import React from "react";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { DayCss } from "../../style";
import { IDay, ITask } from "../../utils/types";
import { isDaysEqual } from "../../utils/utils";
import DayDetails from "../DayDetails/DayDetails";
import { CgMoreO } from "react-icons/cg";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Day: React.FC<IDay> = ({ day, isFirstRow }) => {
  const { activeDay, setActiveDay, filteredTasks, currentDate } =
    useContext(GlobalContext);
  const [dayTasks, setDayTasks] = useState<ITask[]>([]);
  const [detailModalShow, setDetailModalShow] = useState(false);

  useEffect(() => {
    setDayTasks(
      filteredTasks[day.format("YYYY-MM-DD")]
        ? filteredTasks[day.format("YYYY-MM-DD")]
        : []
    );
  }, [filteredTasks, day, currentDate]);

  const handleDetailModal = () => {
    setDetailModalShow((prev) => !prev);
  };

  const isToday = isDaysEqual(day);
  const isActive = isDaysEqual(day, activeDay);
  return (
    <React.Fragment>
      <div
        css={DayCss.day(isToday, isActive)}
        onClick={() => setActiveDay(day)}
      >
        {isActive && (
          <div css={DayCss.activeButton} onClick={handleDetailModal}>
            {" "}
            <CgMoreO />{" "}
          </div>
        )}
        {day.format("DD")}
        {isFirstRow && <div>{day.format("ddd")}</div>}
        <Droppable droppableId={day.format("YYYY-MM-DD")}>
          {(dropableProvided) => (
            <div
              css={DayCss.tasks}
              ref={dropableProvided.innerRef}
              {...dropableProvided.droppableProps}
            >
              {dayTasks.map((task: ITask, index: number) => (
                <Draggable draggableId={task.id} index={index} key={task.id}>
                  {(draggableProvided) => (
                    <div
                      css={DayCss.task(task.color)}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      {task.label}
                    </div>
                  )}
                </Draggable>
              ))}
              {dropableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      {detailModalShow && (
        <DayDetails
          day={day}
          tasks={dayTasks}
          handleDetailModal={handleDetailModal}
        />
      )}
    </React.Fragment>
  );
};

export default Day;
