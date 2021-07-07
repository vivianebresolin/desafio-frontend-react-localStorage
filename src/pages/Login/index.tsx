import imgLogo from '../../assets/imgs/logo.png';
import { FormLogin } from './components/FormLogin';
import styles from './styles.module.scss';

export function Login() {
  return (
    <div className={styles.loginContainer}>
      <main className={styles.loginContent}>
        <img src={imgLogo} alt="Logo do Elogroup" />
        <FormLogin />
      </main>
    </div>
  );
}