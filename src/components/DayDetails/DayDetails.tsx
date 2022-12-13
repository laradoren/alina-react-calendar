import {  useState } from "react";
import { DayDetailsCss, ModalCss } from "../../style";
import { IDayDetails } from "../../utils/types";
import ActiveTask from "../ActiveTask/ActiveTask";

const DayDetails: React.FC<IDayDetails> = ({
  day,
  tasks,
  handleDetailModal,
}) => {
  const [activeTask, setActiveTask] = useState(tasks[0]);

  return (
    <div css={ModalCss.overlay}>
      <div css={ModalCss.modal}>
        <div css={DayDetailsCss.content}>
          <div css={DayDetailsCss.dayDetails}>
            <div css={DayDetailsCss.day}>{day.format("DD dddd, MMMM")}</div>
            <hr css={DayDetailsCss.line} />
            <div css={DayDetailsCss.taskList}>
              <div css={DayDetailsCss.title}>
                Task list for day. Total: {tasks.length}
              </div>
              {tasks.map((task) => (
                <div key={task.id} css={DayDetailsCss.task(task.color)} onClick={() => setActiveTask(task)}>
                  <div>{task.label}</div>
                  <div css={DayDetailsCss.desc}>{task.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div css={DayDetailsCss.taskDetails}>
            {tasks.length ? <ActiveTask activeTask={activeTask} /> : <div>There are no task for this day.</div>}
          </div>
        </div>
        <button css={DayDetailsCss.button} onClick={handleDetailModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DayDetails;
