import axios from 'axios';

interface Props {
  period: number;
  id: string;
  reason: string;
}

export async function deleteAttend({ id, period, reason }: Props) {
  return axios.delete(`/api/attend/club`, { params: { period, id, reason } });
}
