import axios from 'axios';

interface VerifyData {
  email: string;
  code: string;
}

export const getVerify = async (data: VerifyData) => {
  const response = await axios.get('/api/auth/verify', { params: data });
  return response;
};
