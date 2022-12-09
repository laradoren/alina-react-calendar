import css from './Header.module.css';
import CalendarHeader from '../CalendarHeader/CalendarHeader';

function Header() {
  return (
    <header className={css.header}>
      <CalendarHeader />
      <div className={css.actionList}>
        <button>Save as Json</button>
        <button>Save as picture</button>
      </div>
    </header>
  );
}

export default Header;
