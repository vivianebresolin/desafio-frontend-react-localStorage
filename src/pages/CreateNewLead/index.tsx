import { Header } from '../../components/Header';
import { FormClient } from './components/FormClient';
import { Oportunities } from './components/Oportunities';
import styles from './styles.module.scss';

export function CreateNewLead() {
  return (
    <div className={styles.newLeadContainer}>
      <Header title='Novo Lead' />
      <main className={styles.newLeadContent}>
        <FormClient />
        <Oportunities />
      </main>
    </div>
  );
}