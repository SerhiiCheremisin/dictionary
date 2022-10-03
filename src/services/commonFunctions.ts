import { IDictionaryItem } from '../types/commonTypes';

export const shuffle = (array:IDictionaryItem[]):IDictionaryItem[]  => {
    return [...array].sort(() => Math.random() - 0.5);
  }