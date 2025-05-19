import axios from 'axios';

export async function postMassage() {
  return axios.post('/api/massage');
}
