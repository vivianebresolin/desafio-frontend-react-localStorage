import styles from './styles.module.scss';

interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return (
    <button
      type="submit"
      className={styles.button}
    >
      {text}
    </button>
  );
}