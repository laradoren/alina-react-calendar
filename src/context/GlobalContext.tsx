import dayjs from 'dayjs';
import React from 'react';
import { IDispatchCallTasksProps, IGlobalContext } from '../utils/types';

const GlobalContext = React.createContext<IGlobalContext>({
    currentDate: dayjs().format("YYYY-MM-DD"),
    setCurrentDate: (day: string) => {},
    activeDay: dayjs(),
    setActiveDay: (day: dayjs.Dayjs) => {},
    dispatchCallTask: ({type, payload}: IDispatchCallTasksProps) => {},
    savedTasks: [],
});

export default GlobalContext;