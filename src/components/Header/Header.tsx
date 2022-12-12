import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { HeaderCss } from "../../style";
import { IHeader } from "../../utils/types";
import { parseStringToDay } from "../../utils/utils";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import {HiSearch } from "react-icons/hi";

const Header: React.FC<IHeader> = ({ onHandleCreateTaskModal }) => {
  const { currentDate, setCurrentDate, filter, setFilter } =
    useContext(GlobalContext);

  const setPrevMonth = () => {
    let prevDayInMonth = parseStringToDay(currentDate);
    setCurrentDate(
      dayjs(
        new Date(
          prevDayInMonth.year(),
          prevDayInMonth.month() - 1,
          prevDayInMonth.date()
        )
      ).format("YYYY-MM-DD")
    );
  };

  const setNextMonth = () => {
    const prevDayInMonth = parseStringToDay(currentDate);
    setCurrentDate(
      dayjs(
        new Date(
          prevDayInMonth.year(),
          prevDayInMonth.month() + 1,
          prevDayInMonth.date()
        )
      ).format("YYYY-MM-DD")
    );
  };

  return (
    <header css={HeaderCss.header}>
      <div css={HeaderCss.date}>
        <button css={HeaderCss.button} onClick={setPrevMonth}>
          <GrFormPrevious />
        </button>
        <input
          type="date"
          css={HeaderCss.input}
          name="date"
          value={currentDate}
          onChange={(e) => setCurrentDate(e.target.value)}
        />
        <button onClick={setNextMonth} css={HeaderCss.button}>
          <GrFormNext />
        </button>
        <button onClick={onHandleCreateTaskModal} css={HeaderCss.action}>Create task</button>
      </div>
      <div css={HeaderCss.filter}>
        <HiSearch />
        <input
          value={filter}
          css={HeaderCss.input}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div css={HeaderCss.actionList}>
        <button css={HeaderCss.action}>Save as Json</button>
        <button css={HeaderCss.action}>Load from Json</button>
        <button css={HeaderCss.action}>Save as picture</button>
      </div>
    </header>
  );
};

export default Header;
