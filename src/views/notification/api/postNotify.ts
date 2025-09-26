import axios from 'axios';

interface Props {
  title: string;
  description: string;
}
export async function postNotify({ title, description }: Props) {
  return axios.post('/api/admin/notify', { title, description });
}
