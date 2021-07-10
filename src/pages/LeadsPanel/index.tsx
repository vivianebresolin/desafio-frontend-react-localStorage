import styles from './styles.module.scss';

import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { Panel } from './components/Panel';

export function LeadsPanel() {
  return (
    <div className={styles.leadsPanelContainer}>
      <Header title='Painel de Leads' />
      <div className={styles.buttonNewLead}>
        <Button type='button' text='Novo Lead (+)' blueButton />
      </div>
      <Panel />
    </div>
  );
}