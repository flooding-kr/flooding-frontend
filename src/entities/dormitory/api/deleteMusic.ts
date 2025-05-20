import axios from 'axios';

export const deleteMusic = async () => {
  const response = await axios.delete(`/api/music`);
  return response;
};
