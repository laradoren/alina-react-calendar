import { CreateTaskCss, ModalCss } from "../../style";
import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { ICreateTask } from "../../utils/types";

// const colors = ["#ee3f3f", "#e71d9d", "#9427dd", "#4752eb", "#42d0ff", "#42ffad", "#47ee44", "#d8ee3f", "#ee7c11"]

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
          <input css={CreateTaskCss.input} name="label" required />
          <div css={CreateTaskCss.label}>Description</div>
          <input css={CreateTaskCss.input} name="desc" />
          <div css={CreateTaskCss.label}>Color</div>
          <input css={CreateTaskCss.input} type="color" name="color" />
          {/* <div css={CreateTaskCss.colors}>
            {colors.map(color => <input css={CreateTaskCss.color(color)} type="radio" name="color" />)}
          </div> */}
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
