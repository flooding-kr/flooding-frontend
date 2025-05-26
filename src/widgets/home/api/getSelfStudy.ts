import axios from 'axios';

export async function getSelfStudy() {
  const { data } = await axios.get(`/api/self-study/status`);
  return data;
}
