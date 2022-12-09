import css from './Day.module.css';

function Day({day}) {
  return (
    <div className={css.day}>
      {day}
      <div className={css.dayActionList}>+</div>
    </div>
  );
}

export default Day;
