import axios from 'axios';

export const getMassageList = async () => {
  const { data } = await axios.get(`/api/massage/rank`);
  return data;
};
