import css from './StatisticsItem.module.css';

const StatisticsItem = ({total, title, icon: Icon}) => {
  return (
    <>
  <Icon className={css.icon} />
  <p className={css.counter}>{total}</p>
  <p className={css.text}>{title}</p>
  </>
);
};

export default StatisticsItem;
