import axios from 'axios';

export const getMyClub = async () => {
  const { data } = await axios.get(`/api/club/myclub`);
  return data.clubs;
};
