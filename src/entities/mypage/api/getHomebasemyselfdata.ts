import axios from 'axios';

export const getHomebaseMyselfdata = async () => {
  const response = await axios.get(`/api/homebase/myself`);
  return response;
};
