import { InputHTMLAttributes } from "react";
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <label className={styles.inputContainer}>
      <p>{label}</p>
      <input {...rest} required />
    </label>
  );
}