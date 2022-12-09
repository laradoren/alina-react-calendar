import dayjs from "dayjs";
import { MouseEventHandler } from "react";
import { HeaderCss } from "../../style";
import { parseStringToDay } from "../../utils/utils";

interface IHeader {
  onHandleCreateTaskModal: MouseEventHandler<HTMLButtonElement>;
  currentDateInput: string;
  setCurrentDateInput: Function;
}

const Header: React.FC<IHeader> = ({
  onHandleCreateTaskModal,
  currentDateInput,
  setCurrentDateInput
}) => {

  const setPrevMonth = () => {
    let prevDayInMonth = parseStringToDay(currentDateInput);
    setCurrentDateInput(dayjs(new Date(prevDayInMonth.year(), prevDayInMonth.month() - 1, prevDayInMonth.date())).format("YYYY-MM-DD"));
  }

  const setNextMonth = () => {
    let prevDayInMonth = parseStringToDay(currentDateInput);
    setCurrentDateInput(dayjs(new Date(prevDayInMonth.year(), prevDayInMonth.month() + 1, prevDayInMonth.date())).format("YYYY-MM-DD"));
  }
  
  return (
    <header css={HeaderCss.header}>
      <div>
        <button onClick={setPrevMonth}>{"<"}</button>
        <input
          type="date"
          css={HeaderCss.input}
          name="date"
          value={currentDateInput}
          onChange={(e) => setCurrentDateInput(e.target.value)}
        />
        <button onClick={setNextMonth}>{">"}</button>
        <button onClick={onHandleCreateTaskModal}>create task</button>
      </div>
      <div css={HeaderCss.actionList}>
        <button>Save as Json</button>
        <button>Save as picture</button>
      </div>
    </header>
  );
};

export default Header;
