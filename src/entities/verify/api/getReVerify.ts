import axios from 'axios';

interface ReVerifyData {
  email: string;
}

export const getReVerify = async (data: ReVerifyData) => {
  const response = await axios.patch('/api/auth/re-verify', data);
  return response;
};
