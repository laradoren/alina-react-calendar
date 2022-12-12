import dayjs from "dayjs";
import { FormEventHandler, MouseEventHandler } from "react";

export interface ICalendar {
    month: dayjs.Dayjs[][];
};

export interface ICreateTask {
    onCreateNewTask: FormEventHandler<HTMLFormElement>;
    onHandleCreateTaskModal: MouseEventHandler<HTMLButtonElement>;
};

export interface IDayDetails {
    day: dayjs.Dayjs;
    tasks: Array<ITask> | [];
    handleDetailModal: MouseEventHandler<HTMLButtonElement>;
};

export interface IDay {
    day: dayjs.Dayjs;
    isFirstRow: boolean;
};

export interface IHeader {
    onHandleCreateTaskModal: MouseEventHandler<HTMLButtonElement>;
}

export interface IActiveTask {
    activeTask: ITask
}

export interface ITaskComponent {
    index: number,
    task: ITask
}

export interface IGlobalContext {
    currentDate: string;
    setCurrentDate: (day: string) => void;
    activeDay: dayjs.Dayjs;
    setActiveDay: (day: dayjs.Dayjs) => void;
    dispatchCallTask: ({type, payload}: IDispatchCallTasksProps) => void;
    filteredTasks: ITasksInDay;
    filter: string;
    setFilter: (filter: string) => void;
}

export interface ITask {
    label: string,
    color: string,
    desc?: string,
    date: string,
    id: string,
}

export interface ITaskDrapProps {
    label: string,
    color: string,
    desc?: string,
    date: string,
    id: string,
    draggedItems?: ITasksInDay,
}

export interface IDispatchCallTasksProps {
    type: string,
    payload: ITaskDrapProps
}

export interface ITasksInDay {
    [key: string] : Array<ITask>
}