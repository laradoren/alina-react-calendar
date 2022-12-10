import dayjs from 'dayjs';
import React from 'react';

interface IGlobalContext {
    currentDate: string;
    setCurrentDate: (day: string) => void;
    activeDay: dayjs.Dayjs;
    setActiveDay: (day: dayjs.Dayjs) => void;
  }

const GlobalContext = React.createContext<IGlobalContext>({
    currentDate: dayjs().format("YYYY-MM-DD"),
    setCurrentDate: (day: string) => {},
    activeDay: dayjs(),
    setActiveDay: (day: dayjs.Dayjs) => {},
});

export default GlobalContext;