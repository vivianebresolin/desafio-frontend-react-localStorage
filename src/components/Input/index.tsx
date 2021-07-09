import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, error = null, ...rest }, ref) => {
  return (
    <div className={styles.inputContainer}>
      <label>
        <p>{label}</p>
        <input {...rest} ref={ref} />
      </label>
      <p className={styles.inputErrorMsg}>{error}</p>
    </div>
  );
}

export const Input = forwardRef(InputBase);