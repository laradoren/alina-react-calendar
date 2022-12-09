import dayjs from "dayjs";
import { FormEventHandler, MouseEventHandler } from "react";
import { CreateTaskCss, ModalCss } from "../../style";

interface IDatePicker {
  onChooseDate: FormEventHandler<HTMLFormElement>;
  onHandleDatePickerModal: MouseEventHandler<HTMLButtonElement>;
}

const DatePicker:React.FC<IDatePicker> = ({onChooseDate, onHandleDatePickerModal}) => {
  return (
    <div css={ModalCss.overlay}>
      <div css={ModalCss.modal}>
        <form onSubmit={onChooseDate} css={CreateTaskCss.form}>
          <div css={CreateTaskCss.label}>Go to date:</div>
          <input type="date" css={CreateTaskCss.input} defaultValue={dayjs().format("YYYY-MM-DD")} name="date" />
          <div css={CreateTaskCss.action}>
            <button css={CreateTaskCss.button(true)} onClick={onHandleDatePickerModal}>Cancel</button>
            <button css={CreateTaskCss.button(false)}type="submit">Choose</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DatePicker;