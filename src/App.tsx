import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import { getMonth, parseStringToDay } from "./utils/utils";
import { useContext, useEffect, useState } from "react";
import { AppCss } from "./style";
import CreateTask from "./components/CreateTask/CreateTask";
import GlobalContext from "./context/GlobalContext";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [createTaskModal, setCreateTaskModal] = useState(false);
  const { currentDate, dispatchCallTask, filteredTasks } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(parseStringToDay(currentDate)));
  }, [currentDate]);

  const onCreateNewTask = (e: any) => {
    //TODO - fix this type
    e.preventDefault();
    let formData = new FormData(e.target);
    const task = {
      date: formData.get("date")?.toString() || currentDate,
      color: formData.get("color")?.toString() || "blue",
      label: formData.get("label")?.toString() || "",
      desc: formData.get("desc")?.toString(),
      id: Date.now().toString(),
    };
    
    dispatchCallTask({type: "create", payload: task});
    onHandleCreateTaskModal();
  };

  const onHandleCreateTaskModal = () => {
    setCreateTaskModal((prev) => !prev);
  };

  const onDragEnd = (result: DropResult) => {
    const {destination, source, draggableId} = result;
    if (!destination) return;

    let newTasksAfterDrag = { ...filteredTasks};

    const dragTask = newTasksAfterDrag[source.droppableId].find((item) => {
      if(item.id === draggableId) {
        return {...item, date: destination.droppableId}
      } 
      return false;
    });
    if(!dragTask) return;
    
    if(destination.droppableId === source.droppableId && destination.index === source.index) return;
     
    const tasksFromSource = newTasksAfterDrag[source.droppableId];
    let tasksFromDestination = newTasksAfterDrag[destination.droppableId];
    tasksFromSource.splice(source.index, 1);
    if(tasksFromDestination) {
      tasksFromDestination.splice(destination.index, 0, dragTask);      
    } else {
      tasksFromDestination = [dragTask];
    }

    newTasksAfterDrag[source.droppableId] = tasksFromSource;
    newTasksAfterDrag[destination.droppableId] = tasksFromDestination;
    dispatchCallTask({type: "drag", payload: {...dragTask, draggedItems: newTasksAfterDrag}})
  }

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
        <DragDropContext onDragEnd={onDragEnd}>
          <Calendar
            month={currentMonth}
          />
        </DragDropContext>
      </div>
    
    
  );
}

export default App;
