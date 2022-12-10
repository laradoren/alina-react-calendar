import dayjs from "dayjs";
import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const ContextWrapper = ({ children }: any) => {
  //TODO - fix this type
  const [currentDate, setCurrentDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [activeDay, setActiveDay] = useState(dayjs());

  return (
    <GlobalContext.Provider value={{ currentDate, setCurrentDate, activeDay, setActiveDay }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
