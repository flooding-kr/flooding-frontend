import axios from 'axios';

export const getSelfStudyList = async () => {
  const { data } = await axios.get(`/api/self-study/rank`);
  return data;
};
