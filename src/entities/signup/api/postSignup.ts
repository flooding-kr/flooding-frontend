import axios from 'axios';

interface SignUpData {
  email: string;
  password: string;
  classroom: number;
  number: number;
  year: number;
  name: string;
  gender: 'MALE' | 'FEMALE';
}
export const postSignup = async (data: SignUpData) => {
  const response = await axios.post('/api/auth/sign-up', data);
  return response;
};
