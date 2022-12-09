import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <div>React Calendar</div>
      <div className={css.actionList}>
        <button>Save as Json</button>
        <button>Save as picture</button>
      </div>
    </header>
  );
}

export default Header;
