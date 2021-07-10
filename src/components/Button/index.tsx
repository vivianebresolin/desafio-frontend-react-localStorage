import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

// interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
//   text: string;
//   blueButton?: boolean;
// }

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  blueButton?: boolean;
}

export function Button({ text, blueButton = false, ...rest }: ButtonProps) {
  return (
    <button
      className={blueButton ? styles.blueButton : styles.button}
      {...rest}
    >
      {text}
    </button>
  );
}