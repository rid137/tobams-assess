export const returnCapitalize = (text: string): string => {
  return text?.charAt(0)?.toUpperCase()+text?.slice(1).toLowerCase()
}

export const clipSentence = (str: string, wordAmout: number): string => {
    if(str.length > wordAmout) {
      str = str.substring(0, wordAmout) + '...'
    }
    return str;
};  

import { format } from 'date-fns';

const toOrdinalSuffix = (day: number): string => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = day % 100;
  return day + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};

export const formatDate = (isoString: string | undefined): string => {
  if (!isoString) return '';
  const date = new Date(isoString);
  const day = toOrdinalSuffix(date.getDate());
  const monthAndYear = format(date, 'MMMM, yyyy');
  return `${day} ${monthAndYear}`;
};
