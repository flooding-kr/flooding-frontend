import axios from 'axios';

import { Meal } from '@/shared/types/meal';

interface Props {
  date: string;
  time: string;
}

export const getMeal = async ({ date, time }: Props): Promise<Meal> => {
  const { data } = await axios.get(`/api/neis/meal?date=${date}&time=${time}`);
  return data;
};
