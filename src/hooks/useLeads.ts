import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import { Lead } from '../types';
import { orderListByName } from "../utils/OrderLeadsByName";

export function useLeads() {
  const [leadsInStorage, setLeadsInStorage] = useState<Lead[]>(
    localStorage.hasOwnProperty('leads')
      ? JSON.parse(localStorage.getItem('leads')!)
      : []
  );
  const history = useHistory();

  function saveLeadInStorage(newLead: Lead) {
    const updatedLeads = [...leadsInStorage, {
      id: newLead.id,
      companyName: newLead.companyName,
      companyPhone: newLead.companyPhone,
      companyEmail: newLead.companyEmail,
      opportunities: newLead.opportunities,
      status: newLead.status
    }];

    const leadsInOrder = orderListByName(updatedLeads);

    try {
      localStorage.setItem('leads', JSON.stringify(leadsInOrder));
      setLeadsInStorage(leadsInOrder);

      Swal.fire(
        'Feito!',
        'Lead incluído com sucesso!',
        'success'
      );

      setTimeout(() => history.push("/"), 1500);
    } catch (error) {
      Swal.fire(
        'Ooops!',
        'Algo deu errado...',
        'error'
      );
    }
  }

  function updateLeadStatus(lead: Lead, newStatus: string) {
    const leadsToUpdate = leadsInStorage.filter(item => item.id !== lead.id);

    const updatedLeads = [...leadsToUpdate, {
      id: lead.id,
      companyName: lead.companyName,
      companyPhone: lead.companyPhone,
      companyEmail: lead.companyEmail,
      opportunities: lead.opportunities,
      status: newStatus
    }];

    const leadsInOrder = orderListByName(updatedLeads);

    try {
      localStorage.setItem('leads', JSON.stringify(leadsInOrder));
      setLeadsInStorage(leadsInOrder);

    } catch (error) {
      Swal.fire(
        'Ooops!',
        'Algo deu errado...',
        'error'
      );
    }
  }

  return { leadsInStorage, saveLeadInStorage, updateLeadStatus };
}