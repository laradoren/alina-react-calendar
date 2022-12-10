import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { HeaderCss } from "../../style";
import { IHeader } from "../../utils/types";
import { parseStringToDay } from "../../utils/utils";

const Header: React.FC<IHeader> = ({
  onHandleCreateTaskModal
}) => {

  const { currentDate, setCurrentDate } = useContext(GlobalContext);

  const setPrevMonth = () => {
    let prevDayInMonth = parseStringToDay(currentDate);
    setCurrentDate(dayjs(new Date(prevDayInMonth.year(), prevDayInMonth.month() - 1, prevDayInMonth.date())).format("YYYY-MM-DD"));
  }

  const setNextMonth = () => {
    let prevDayInMonth = parseStringToDay(currentDate);
    setCurrentDate(dayjs(new Date(prevDayInMonth.year(), prevDayInMonth.month() + 1, prevDayInMonth.date())).format("YYYY-MM-DD"));
  }
  
  return (
    <header css={HeaderCss.header}>
      <div>
        <button onClick={setPrevMonth}>{"<"}</button>
        <input
          type="date"
          css={HeaderCss.input}
          name="date"
          value={currentDate}
          onChange={(e) => setCurrentDate(e.target.value)}
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
