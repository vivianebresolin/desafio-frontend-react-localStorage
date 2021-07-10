import { TableRow } from '../TableRow';
import styles from './styles.module.scss';

const options = ['RPA', 'Produto Digital', 'Analytics', 'BPM', ''];

export function Table() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.firstColumn}><input type='checkbox' /></th>
          <th className={styles.secondColumn}></th>
        </tr>
      </thead>
      <tbody>
        {options.map((option, index) => <TableRow text={option} index={index} />)}
      </tbody>
    </table>
  );
}