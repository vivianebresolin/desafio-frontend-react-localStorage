import { useLeads } from '../../../../hooks/useLeads';
import { PanelRow } from '../PanelRow';
import styles from './styles.module.scss';

export function Panel() {
  const { leadsInStorage, updateLeadStatus } = useLeads();

  return (
    <main className={styles.panelContainer}>
      <table>
        <thead>
          <tr>
            <th>Cliente em Potencial</th>
            <th>Dados Confirmados</th>
            <th>Reunião Agendada</th>
          </tr>
        </thead>
        <tbody>
          {leadsInStorage.map((lead, index) =>
            <PanelRow
              key={lead.id}
              id={lead.id}
              index={index}
              companyName={lead.companyName}
              status={lead.status}
              leads={leadsInStorage}
              updateLeadStatus={updateLeadStatus}
            />
          )}
        </tbody>
      </table>
    </main>
  );
}