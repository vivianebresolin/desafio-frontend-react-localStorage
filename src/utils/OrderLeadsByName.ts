import { Lead } from '../types';

export const orderListByName = (array: Lead[]): Lead[] => {
  array.sort(function (a, b) {
    return a.companyName < b.companyName ? -1 : a.companyName > b.companyName ? 1 : 0;
  });

  return array;
}