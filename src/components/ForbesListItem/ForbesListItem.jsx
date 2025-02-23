import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import css from './ForbesListItem.module.css';
import clsx from 'clsx';

const ForbesListItem = ({ name, capital, avatar, isIncrease }) => {
  const statusClsx = clsx(
    css.capital,
    isIncrease ? <FcBullish /> : <FcBearish />,
  );
  return (
    <>
      <img className={css.avatar} src={avatar} />
      <h3 className={css.title}>{name}</h3>
      <span className={css.capital}>
        {capital} <BiDollarCircle color="#2196f3" size={24} />
        {isIncrease ? <FcBullish /> : <FcBearish />}
      </span>
    </>
  );
};

export default ForbesListItem;
