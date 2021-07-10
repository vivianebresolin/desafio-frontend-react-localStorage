import styles from './styles.module.scss';

interface TableRowProps {
  text: string;
  index: number;
  checked: boolean[];
  onChange: (index: number) => void;
}

export function TableRow({ text, index, checked, onChange }: TableRowProps) {
  const isEven = index % 2 === 0;

  return (
    <tr key={index * Math.random()} className={isEven ? styles.background : ''}>
      <td className={styles.checkbox}>
        <input
          type="checkbox"
          checked={checked[index]}
          onChange={() => onChange(index)}
        />
      </td>
      <td>
        <div className={styles.text}>
          {text}
        </div>
      </td>
    </tr>
  );
}