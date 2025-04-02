import axios from 'axios';

interface HomebaseData {
  table_number: number;
  floor: number;
  participants: string[];
  period: number;
}

export async function postHomebaseData({
  table_number,
  floor,
  participants,
  period,
}: HomebaseData) {
  return axios.post('/api/homebase', {
    table_number,
    floor,
    participants,
    period,
  });
}
