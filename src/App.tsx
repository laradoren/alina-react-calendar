import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import { getMonth, parseStringToDay } from "./utils/utils";
import { useContext, useEffect, useState } from "react";
import { AppCss } from "./style";
import CreateTask from "./components/CreateTask/CreateTask";
import GlobalContext from "./context/GlobalContext";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [createTaskModal, setCreateTaskModal] = useState(false);
  const { currentDate } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(parseStringToDay(currentDate)));
  }, [currentDate]);

  const onCreateNewTask = (e: any) => {
    //TODO - fix this type
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
      />
      {createTaskModal && (
        <CreateTask
          onCreateNewTask={onCreateNewTask}
          onHandleCreateTaskModal={onHandleCreateTaskModal}
        />
      )}
      <Calendar
        month={currentMonth}
      />
    </div>
  );
}

export default App;
