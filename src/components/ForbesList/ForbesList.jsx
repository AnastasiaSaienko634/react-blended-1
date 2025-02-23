import css from './ForbesList.module.css';
import ForbesListItem from '../ForbesListItem/ForbesListItem';

const ForbesList = ({ forbes }) => {
  return (
    <div className={css.board}>
      <div className={css.header}>
        <h2 className={css.title}>
          <span className={css.titleTop}>Forbes</span>
          <span className={css.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={css.list}>
        {forbes.map(el => {
          return (
            <li className={css.item} key={el.id}>
              <ForbesListItem
                name={el.name}
                capital={el.capital}
                avatar={el.avatar}
                isIncrease={el.isIncrease}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ForbesList;
