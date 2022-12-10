import dayjs from "dayjs";
import { FormEventHandler, MouseEventHandler } from "react";

export interface ICalendar {
    month: dayjs.Dayjs[][];
};

export interface ICreateTask {
    onCreateNewTask: FormEventHandler<HTMLFormElement>;
    onHandleCreateTaskModal: MouseEventHandler<HTMLButtonElement>;
};

export interface IDatePicker {
    onChooseDate: FormEventHandler<HTMLFormElement>;
    onHandleDatePickerModal: MouseEventHandler<HTMLButtonElement>;
};

export interface IDay {
    day: dayjs.Dayjs,
    isFirstRow: boolean,
};

export interface IHeader {
    onHandleCreateTaskModal: MouseEventHandler<HTMLButtonElement>;
}

export interface IGlobalContext {
    currentDate: string;
    setCurrentDate: (day: string) => void;
    activeDay: dayjs.Dayjs;
    setActiveDay: (day: dayjs.Dayjs) => void;
    dispatchCallTask: ({type, payload}: IDispatchCallTasksProps) => void;
    savedTasks: Array<ITask> | [];
}

export interface ITask {
    label: string,
    color: string,
    desc?: string,
    date: string,
    id: string
}

export interface IDispatchCallTasksProps {
    type: string,
    payload: ITask
}