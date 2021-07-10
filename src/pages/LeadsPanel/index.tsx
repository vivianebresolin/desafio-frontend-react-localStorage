import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { Panel } from './components/Panel';
import styles from './styles.module.scss';

export function LeadsPanel() {
  const history = useHistory();

  function handleClick() {
    history.push("/new-lead");
  }

  return (
    <div className={styles.leadsPanelContainer}>
      <Header title='Painel de Leads' />
      <div className={styles.buttonNewLead}>
        <Button
          type='button'
          text='Novo Lead (+)'
          blueButton
          onClick={handleClick}
        />
      </div>
      <Panel />
    </div>
  );
}