import { FormEvent, useRef } from 'react';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { useLeads } from '../../../../hooks/useLeads';
import { Oportunities } from '../Oportunities';
import { oportunities_options } from '../../../../utils/OportunitiesOptions'
import styles from './styles.module.scss';

export function FormNewLead() {
  const { saveLeadInStorage } = useLeads();
  const clientNameRef = useRef<HTMLInputElement>(null);
  const clientPhoneRef = useRef<HTMLInputElement>(null);
  const clientEmailRef = useRef<HTMLInputElement>(null);
  let opportunities = {};

  function updateOpportunities(updatedState: boolean[]) {
    opportunities = oportunities_options.reduce((initialObject, k, i) => (
      { ...initialObject, [k]: updatedState[i] }), {});
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const newLead = {
      companyName: clientNameRef.current!.value,
      companyPhone: clientPhoneRef.current!.value,
      companyEmail: clientEmailRef.current!.value,
      opportunities: opportunities,
      status: 'Cliente em Potencial'
    }

    saveLeadInStorage(newLead);
  }

  return (
    <form className={styles.formContainer} onSubmit={event => handleSubmit(event)}>
      <div className={styles.clientDataInputs}>
        <Input
          label='Nome *'
          type="text"
          required
          ref={clientNameRef}
        />
        <Input
          label='Telefone *'
          type="text"
          required
          ref={clientPhoneRef}
        />
        <Input
          label='Email *'
          type="email"
          required
          ref={clientEmailRef}
        />
      </div>

      <div className={styles.oportunities}>
        <Oportunities updateOpportunities={updateOpportunities} />
        <Button
          type='submit'
          text='Salvar'
          blueButton
        />
      </div>
    </form>
  );
}