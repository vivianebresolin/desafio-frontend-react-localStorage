import styles from './styles.module.scss';

interface TableRowProps {
  text: string;
  index: number;
}

export function TableRow({ text, index }: TableRowProps) {
  const isEven = index % 2 === 0;

  return (
    <tr key={index * Math.random()} className={isEven ? styles.background : ''}>
      <td className={styles.checkbox}><input type="checkbox" /></td>
      <td>
        <div className={styles.text}>
          {text}
        </div>
      </td>
    </tr>
  );
}