import axios from 'axios';

interface Props {
  date: string;
  type: 'LATEST' | 'LIKES';
}

export const getMusic = async ({ date, type }: Props) => {
  const { data } = await axios.get(`/api/music?date=${date}&type=${type}`);
  return data;
};
