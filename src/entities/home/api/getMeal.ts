import axios from 'axios';

interface Props {
  currentDate: string;
  MMEAL_SC_CODE: number;
}

export const getMeal = async ({ currentDate, MMEAL_SC_CODE }: Props) => {
  const { data } = await axios.get(`neis/meal/${currentDate}/${MMEAL_SC_CODE}`);
  return data.mealServiceDietInfo?.[1]?.row?.[0] || null;
};
