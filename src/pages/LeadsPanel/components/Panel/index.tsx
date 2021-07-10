import styles from './styles.module.scss';

export function Panel() {
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
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}