import { CreateTaskCss, ModalCss } from "../../style";
import React, { FormEventHandler, MouseEventHandler, useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

interface ICreateTask {
  onCreateNewTask: FormEventHandler<HTMLFormElement>;
  onHandleCreateTaskModal: MouseEventHandler<HTMLButtonElement>;
}

const CreateTask: React.FC<ICreateTask> = ({
  onCreateNewTask,
  onHandleCreateTaskModal,
}) => {
  const { activeDay } = useContext(GlobalContext);

  return (
    <div css={ModalCss.overlay}>
      <div css={ModalCss.modal}>
        <div css={CreateTaskCss.title}>Create new task</div>
        <form onSubmit={onCreateNewTask} css={CreateTaskCss.form}>
          <div css={CreateTaskCss.label}>Choose date:</div>
          <input
            type="date"
            css={CreateTaskCss.input}
            defaultValue={activeDay.format("YYYY-MM-DD")}
            name="date"
          />
          <div css={CreateTaskCss.label}>Label</div>
          <input css={CreateTaskCss.input} name="label" />
          <div css={CreateTaskCss.label}>Description</div>
          <input css={CreateTaskCss.input} name="desc" />
          <div css={CreateTaskCss.label}>Color</div>
          <input css={CreateTaskCss.input} type="color" name="color" />
          <div css={CreateTaskCss.action}>
            <button
              css={CreateTaskCss.button(true)}
              onClick={onHandleCreateTaskModal}
            >
              Cancel
            </button>
            <button css={CreateTaskCss.button(false)} type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
