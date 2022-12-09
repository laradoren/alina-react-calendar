import dayjs from "dayjs";
import { MouseEventHandler } from "react";
import { HeaderCss } from "../../style";

interface IHeader {
  onHandleCreateTaskModal: MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<IHeader> = ({ onHandleCreateTaskModal }) => {
  let currentDate = dayjs();
  return (
    <header css={HeaderCss.header}>
      <div>
        {currentDate.format()}
        <button>Chose date</button>
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
