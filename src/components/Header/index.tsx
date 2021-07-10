import imgLogo from '../../assets/imgs/logo.png';
import styles from './styles.module.scss';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src={imgLogo} alt='Logo do Elogroup' />
      </div>
      <h1>{title}</h1>
    </header>
  );
}