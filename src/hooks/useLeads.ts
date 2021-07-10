import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

type Lead = {
  companyName: string;
  companyPhone: string;
  companyEmail: string;
  opportunities: {},
  status: string;
}

export function useLeads() {
  const [leadsInStorage, setLeadsInStorage] = useState<Lead[]>(
    localStorage.hasOwnProperty('leads')
      ? JSON.parse(localStorage.getItem('leads')!)
      : []
  );
  const history = useHistory();

  function saveLeadInStorage(newLead: Lead) {
    const updatedLeads = [...leadsInStorage, {
      companyName: newLead.companyName,
      companyPhone: newLead.companyPhone,
      companyEmail: newLead.companyEmail,
      opportunities: newLead.opportunities,
      status: newLead.status
    }];

    try {
      localStorage.setItem('leads', JSON.stringify(updatedLeads));
      setLeadsInStorage(updatedLeads);

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

  return { leadsInStorage, saveLeadInStorage };
}