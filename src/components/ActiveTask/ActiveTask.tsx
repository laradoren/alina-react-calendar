import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { ActiveTaskCss } from "../../style";
import { IActiveTask } from "../../utils/types";
import { MdDone } from "react-icons/md";
import { FiDelete } from "react-icons/fi";

const ActiveTask: React.FC<IActiveTask> = ({ activeTask }) => {
  const [currentTask, setCurrentTask] = useState(activeTask);
  const { dispatchCallTask } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentTask(activeTask);
  }, [activeTask]);

  const handlerTaskForm = (e: any) => {
    setCurrentTask({ ...currentTask, [e.target.name]: e.target.value });
  };

  const onUpdateTask = () => {
    dispatchCallTask({type: "edit", payload: currentTask});
  };

  const onDeleteTask = () => {
    dispatchCallTask({type: "delete", payload: currentTask});
  };
  return (
    <form css={ActiveTaskCss.form}>
      <div css={ActiveTaskCss.title}>
        Task details{" "}
        <div css={ActiveTaskCss.icon}>
          <MdDone onClick={onUpdateTask} /> <FiDelete onClick={onDeleteTask} />{" "}
        </div>
      </div>
      <div css={ActiveTaskCss.label}>Label</div>
      <input
        css={ActiveTaskCss.input}
        value={currentTask.label}
        name="label"
        required
        onChange={handlerTaskForm}
      />
      <div css={ActiveTaskCss.label}>Description</div>
      <input
        css={ActiveTaskCss.input}
        name="desc"
        value={currentTask.desc}
        onChange={handlerTaskForm}
      />
      <div css={ActiveTaskCss.label}>Color</div>
      <input
        css={ActiveTaskCss.inputColor}
        type="color"
        name="color"
        value={currentTask.color}
        onChange={handlerTaskForm}
      />
    </form>
  );
};

export default ActiveTask;
