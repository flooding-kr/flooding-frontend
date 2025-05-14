import axios from 'axios';

export async function getMassage() {
  const { data } = await axios.get(`/api/massage/status`);
  return data;
}
