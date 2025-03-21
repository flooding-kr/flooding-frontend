import axios from 'axios';

interface DataType {
  email: string;
}

export const postFindPassword = async (data: DataType) => {
  const response = await axios.post('/api/auth/find-password', data);
  return response;
};
