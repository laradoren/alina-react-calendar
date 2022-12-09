import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';
import { getMonth } from './utils/utils';
import { FormEventHandler, useState } from "react";
import { AppCss } from './style';
import dayjs from 'dayjs';
import CreateTask from './components/CreateTask/CreateTask';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [activeDay, setActiveDay] = useState(dayjs());
  const [createTaskModal, setCreateTaskModal] = useState(false);
  
  const onCreateNewTask = (e: any) => {
    e.preventDefault();
  }

  const onCreateTaskModalOpen = () => {
    setCreateTaskModal(true);
  }
  

  return (
    <div css={AppCss.app}>
      <Header onCreateTaskModalOpen={onCreateTaskModalOpen} />
      {createTaskModal && <CreateTask activeDay={activeDay} onCreateNewTask={onCreateNewTask} />}
      <Calendar month={currentMonth} activeDay={activeDay} setActiveDay={setActiveDay} />
    </div>
  );
}

export default App;
