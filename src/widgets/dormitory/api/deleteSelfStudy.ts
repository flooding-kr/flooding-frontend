import axios from 'axios';

export const deleteSelfStudy = async () => {
  const response = await axios.delete(`/api/self-study`);
  return response;
};
