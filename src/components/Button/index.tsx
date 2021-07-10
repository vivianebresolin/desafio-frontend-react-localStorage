import { ComponentPropsWithoutRef } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  text: string;
  blueButton?: boolean;
}

export function Button({ text, type, blueButton = false }: ButtonProps) {
  return (
    <button
      type={type}
      className={blueButton ? styles.blueButton : styles.button}
    >
      {text}
    </button>
  );
}