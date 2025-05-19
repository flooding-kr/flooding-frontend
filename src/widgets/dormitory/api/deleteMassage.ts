import axios from 'axios';

export const deleteMassage = async () => {
  const response = await axios.delete(`/api/massage`);
  return response;
};
