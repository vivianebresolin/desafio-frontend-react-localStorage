import { useState } from 'react';
import { TableRow } from '../TableRow';
import { oportunities_options } from '../../../../../../utils/OportunitiesOptions';
import styles from './styles.module.scss';
import { useEffect } from 'react';

interface TableProps {
  updateOpportunities: (updatedState: boolean[]) => void;
}

export function Table({ updateOpportunities }: TableProps) {
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(oportunities_options.length).fill(false)
  );
  const [checkAllState, setCheckAllState] = useState(false);

  function handleChangeChecked(position: number) {
    const updatedCheckedState = checkedState
      .map((state, index) => index === position ? !state : state);

    setCheckedState(updatedCheckedState);
  }

  function checkAll() {
    const updatedCheckedState = checkedState.map(state => state === true ? state : !state);
    setCheckedState(updatedCheckedState);
  }

  function uncheckAll() {
    const updatedCheckedState = checkedState.map(state => state === false ? state : !state);
    setCheckedState(updatedCheckedState);
  }

  function handleCheckOrUnckeckAll() {
    const updatedcheckAllState = !checkAllState;
    setCheckAllState(updatedcheckAllState);

    updatedcheckAllState ? checkAll() : uncheckAll();
  }

  useEffect(() => {
    updateOpportunities(checkedState);
  }, [updateOpportunities, checkedState]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.firstColumn}>
            <input
              type='checkbox'
              checked={checkAllState}
              onChange={handleCheckOrUnckeckAll}
            />
          </th>
          <th className={styles.secondColumn}></th>
        </tr>
      </thead>
      <tbody>
        {oportunities_options.map((option, index) =>
          <TableRow
            text={option}
            index={index}
            checked={checkedState}
            onChange={handleChangeChecked}
          />
        )}
      </tbody>
    </table>
  );
}