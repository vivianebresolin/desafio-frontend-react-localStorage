import { Header } from '../../components/Header';
import { FormNewLead } from './components/FormNewLead';

import styles from './styles.module.scss';

export function CreateNewLead() {
  return (
    <div className={styles.newLeadContainer}>
      <Header title='Novo Lead' />
      <main className={styles.newLeadContent}>
        <FormNewLead />
      </main>
    </div>
  );
}