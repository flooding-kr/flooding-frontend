import axios from 'axios';

interface DataType {
  email: string;
  code: string;
  password: string;
}

export const postResetPassword = async (data: DataType) => {
  const response = await axios.post('/api/auth/reset-password', data);
  return response;
};
