import css from './CryptoHistory.module.css';
import { formatDate } from '../../helpers/formatDate';
const CryptoHistory = ({ transactions }) => {
  return (
    <>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr>
            <th className={css.th}>Num</th>
            <th className={css.th}>Price</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Data</th>
          </tr>
        </thead>

        <tbody className={css.td}>
          {transactions.map((transaction, index) => (
            <tr className={css.transaction} key={transaction.id}>
              <td className={css.td}>{index + 1}</td>
              <td className={css.td}>{transaction.price}</td>
              <td className={css.td}>{transaction.amount}</td>
              <td className={css.td}>{formatDate(transaction.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CryptoHistory;
