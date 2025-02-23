import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];

const Statistics = ({ stats }) => {
  return (
    <>
      <ul className={style.list}>
        {stats.map((el, index) => (
          <li className={style.item} key={el.id}>
            <StatisticsItem
              title={el.title}
              total={el.total}
              icon={icons[index]}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Statistics;
