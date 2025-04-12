import axios from 'axios';

export const deleteHomebaseGroup = async (homebaseGroupId: string) => {
  const response = await axios.delete(`/api/homebase/${homebaseGroupId}`);
  return response;
};
