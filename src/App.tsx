import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';
import { getMonth } from './utils/utils';
import { useState } from "react";
import { AppCss } from './style';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  console.table(getMonth());
  return (
    <div css={AppCss.app}>
      <Header />
      <Calendar month={currentMonth} />
    </div>
  );
}

export default App;
