import { Input } from '../../../../components/Input';
import styles from './styles.module.scss';

export function FormClient() {
  return (
    <form className={styles.formContainer}>
      <Input label='Nome *' type="text" />
      <Input label='Telefone *' type="text" />
      <Input label='Email *' type="email" />
    </form>
  );
}