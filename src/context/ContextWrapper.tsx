import dayjs from "dayjs";
import { useEffect, useReducer, useState } from "react";
import { CalendarApi } from "../api/CalendarApi";
import { IDispatchCallTasksProps, IHoliday, ITasksInDay } from "../utils/types";
import GlobalContext from "./GlobalContext";

function savedTasksReducer(
  state: ITasksInDay,
  { type, payload }: IDispatchCallTasksProps
) {
  const newState = { ...state };
  const key = payload.date;
  switch (type) {
    case "create":
      if (newState[key]) {
        newState[key].push(payload);
      } else {
        newState[key] = [payload];
      }
      return newState;
    case "edit":
      newState[key] = newState[key].map((item: any) =>
        item.id === payload.id ? payload : item
      );
      return newState;
    case "delete":
      newState[key] = newState[key].filter((item: any) => item.id !== payload.id)
      return newState;
    case "drag": 
      return {...newState, ...payload.draggedItems};
    case "set":     
      return {...payload.tasksFromFile}  
    default:
      throw new Error("Unknow type for TasksReducer");
  }
}

function initTasks() {
  const storageTasks = localStorage.getItem("savedTasks");
  return storageTasks ? JSON.parse(storageTasks) : {};
}

const ContextWrapper = ({ children }: any) => {
  //TODO - fix this type
  const [currentDate, setCurrentDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [activeDay, setActiveDay] = useState(dayjs());
  const [filter, setFilter] = useState("");
  const [savedTasks, dispatchCallTask] = useReducer(
    savedTasksReducer,
    {},
    initTasks
  );
  const [filteredTasks, setFilteredTasks] = useState(savedTasks);
  const [publicHoliday, setPublicHoliday] = useState<IHoliday[]>([]);

  useEffect(() => {    
    CalendarApi.getPublicHolidays(currentDate.slice(0, 4)).then(response => {
      setPublicHoliday(response.data);
    });
    
  }, [currentDate]);

  useEffect(() => {
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
  }, [savedTasks]);

  useEffect(() => {
    const filteredByLabel: ITasksInDay = {};
    Object.keys(savedTasks).map(date => filteredByLabel[date] = savedTasks[date].filter((task) =>
    task.label.trim().toLowerCase().includes(filter.trim().toLowerCase()))
  );
    setFilteredTasks(filteredByLabel);
  }, [filter, savedTasks]);

  return (
    <GlobalContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        activeDay,
        setActiveDay,
        dispatchCallTask,
        filteredTasks,
        filter,
        setFilter,
        publicHoliday
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
