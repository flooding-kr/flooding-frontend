import axios from 'axios';

export async function postSelfStudy() {
  return axios.post('/api/self-study');
}
