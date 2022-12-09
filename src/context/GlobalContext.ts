import dayjs from 'dayjs';
import React from 'react';

const GlobalContext = React.createContext({
    currentDate: dayjs(),
    setCurrentDate: (day: dayjs.Dayjs) => {}
});

export default GlobalContext;