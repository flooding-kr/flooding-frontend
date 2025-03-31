import axios from 'axios';

interface HomebaseData {
  floor: number;
  period: number;
}

export const getHomebasedata = async ({ floor, period }: HomebaseData) => {
  const response = await axios.get(`/api/homebase`, {
    params: { floor, period },
  });
  return response;
};
