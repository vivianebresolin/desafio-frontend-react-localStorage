import { Button } from '../../../../components/Button';
import { Table } from './components/Table';
import styles from './styles.module.scss';

export function Oportunities() {
  return (
    <section className={styles.oportunitiesContainer}>
      <h4>Oportunidades *</h4>
      <Table />
      <Button text='Salvar' blueButton />
    </section>
  );
}