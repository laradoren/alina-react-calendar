import dayjs from "dayjs";
import { CreateTaskCss, ModalCss } from "../../style";
import React, { FormEventHandler } from "react";

interface ICreateTask {
  activeDay: dayjs.Dayjs;
  onCreateNewTask: FormEventHandler<HTMLFormElement>;
}

const CreateTask: React.FC<ICreateTask> = ({ activeDay, onCreateNewTask }) => {
  return (
    <div css={ModalCss.overlay}>
      <div css={ModalCss.modal}>
        Create new task for date: {activeDay.format()}
        <form onSubmit={onCreateNewTask} css={CreateTaskCss.form}>
          <input css={CreateTaskCss.input}/>
          <button css={CreateTaskCss.button(true)}>Cancel</button>
          <button css={CreateTaskCss.button(false)}type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
