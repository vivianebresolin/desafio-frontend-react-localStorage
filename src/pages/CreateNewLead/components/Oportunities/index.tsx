import { Table } from './components/Table';
import styles from './styles.module.scss';

interface OpportunitiesProps {
  updateOpportunities: (updatedState: boolean[]) => void;
}

export function Oportunities({ updateOpportunities }: OpportunitiesProps) {
  return (
    <section className={styles.oportunitiesContainer}>
      <h4>Oportunidades *</h4>
      <Table updateOpportunities={updateOpportunities} />
    </section>
  );
}