import styles from './styles.module.scss';

export function Panel() {
  return (
    <main className={styles.panelContainer}>
      <table>
        <tr>
          <th>Cliente em Potencial</th>
          <th>Dados Confirmados</th>
          <th>Reunião Agendada</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
      </table>
    </main>
  );
}