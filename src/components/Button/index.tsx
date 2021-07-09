import { ComponentPropsWithoutRef } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  text: string;
}

export function Button({ text, type }: ButtonProps) {
  return (
    <button
      type={type}
      className={styles.button}
    >
      {text}
    </button>
  );
}