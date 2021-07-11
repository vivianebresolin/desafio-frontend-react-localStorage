import { DragEvent } from 'react';
import { Lead } from '../../../../types';
import styles from './styles.module.scss';

interface PanelRowProps {
  index: number;
  id: string;
  companyName: string;
  status: string;
  leads: Lead[];
  updateLeadStatus: (lead: Lead, status: string) => void
}

export function PanelRow({ index, id, companyName, status, leads, updateLeadStatus }: PanelRowProps) {
  const isEven = index % 2 === 0;

  function onDragStart(event: DragEvent, id: string) {
    event.dataTransfer.setData("id", id);
  }
  function onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  function onDrop(event: DragEvent, status: string) {
    const leadId = event.dataTransfer.getData("id");
    const lead = leads.filter(lead => lead.id === leadId)[0];
    updateLeadStatus(lead, status);
  }

  return (
    <tr className={isEven ? styles.background : ''}>
      <td onDragOver={event => onDragOver(event)}>
        <div
          draggable
          onDragStart={event => onDragStart(event, id)}
        >
          {status === 'Cliente em Potencial' && `${companyName}`}
        </div>
      </td>
      <td
        onDragOver={event => onDragOver(event)}
        onDrop={event => onDrop(event, 'Dados Confirmados')}
      >
        <div
          draggable
          onDragStart={event => onDragStart(event, id)}
        >
          {status === 'Dados Confirmados' && `${companyName}`}
        </div>
      </td>
      <td
        onDragOver={event => onDragOver(event)}
        onDrop={event => onDrop(event, 'Reunião Agendada')}
      >
        <div>
          {status === 'Reunião Agendada' && `${companyName}`}
        </div>
      </td>
    </tr>
  );
}