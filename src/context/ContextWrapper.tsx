import dayjs from "dayjs";
import { useEffect, useReducer, useState } from "react";
import { IDispatchCallTasksProps, ITask } from "../utils/types";
import GlobalContext from "./GlobalContext";

function savedTasksReducer(state: Array<ITask>, { type, payload }: IDispatchCallTasksProps) {
  switch (type) {
    case "create":
      return [...state, payload];
    case "edit":
      return state.map((item: any) =>
        item.id === payload.id ? payload : item
      );
    case "delete":
      return state.filter((item: any) => item.id !== payload.id);
    default:
      throw new Error("Unknow type for TasksReducer");
  }
}

function initTasks() {
  const storageTasks = localStorage.getItem("savedTasks");
  return storageTasks ? JSON.parse(storageTasks) : [];
}

const ContextWrapper = ({ children }: any) => {
  //TODO - fix this type
  const [currentDate, setCurrentDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [activeDay, setActiveDay] = useState(dayjs());
  const [filter, setFilter] = useState("");
  const [savedTasks, dispatchCallTask] = useReducer(
    savedTasksReducer,
    [],
    initTasks
  );
  const [filteredTasks, setFilteredTasks] = useState(savedTasks);


  useEffect(() => {
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
  }, [savedTasks]);

  
  useEffect(() => {
    const filteredByLabel = savedTasks.filter(task => task.label.trim().toLowerCase().includes(filter.trim().toLowerCase()));
    setFilteredTasks(filteredByLabel)
  }, [filter, savedTasks]);

  return (
    <GlobalContext.Provider
      value={{ currentDate, setCurrentDate, activeDay, setActiveDay, dispatchCallTask, filteredTasks, filter, setFilter }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
