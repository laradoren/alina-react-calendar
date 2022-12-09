import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import { getMonth, parseStringToDay } from "./utils/utils";
import { useEffect, useState } from "react";
import { AppCss } from "./style";
import dayjs from "dayjs";
import CreateTask from "./components/CreateTask/CreateTask";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [activeDay, setActiveDay] = useState(dayjs());
  const [createTaskModal, setCreateTaskModal] = useState(false);
  const [currentDateInput, setCurrentDateInput] = useState(dayjs().format("YYYY-MM-DD"));

  useEffect(() => {
    setCurrentMonth(getMonth(parseStringToDay(currentDateInput)));
  }, [currentDateInput])
  

  const onCreateNewTask = (e: any) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    console.log(formData.get("date"));
    console.log(formData.get("color"));
    console.log(formData.get("label"));
    console.log(formData.get("desc"));
  };

  const onHandleCreateTaskModal = () => {
    setCreateTaskModal((prev) => !prev);
  };

  return (
    <div css={AppCss.app}>
      <Header
        onHandleCreateTaskModal={onHandleCreateTaskModal}
        currentDateInput={currentDateInput}
        setCurrentDateInput={setCurrentDateInput}
      />
      {createTaskModal && (
        <CreateTask
          activeDay={activeDay}
          onCreateNewTask={onCreateNewTask}
          onHandleCreateTaskModal={onHandleCreateTaskModal}
        />
      )}
      <Calendar
        month={currentMonth}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
      />
    </div>
  );
}

export default App;
