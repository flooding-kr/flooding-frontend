import axios from 'axios';

interface Props {
  period: number;
  id: string;
}
export async function postAttend({ period, id }: Props) {
  return axios.post('/api/attend/club', { period, club_id: id });
}
