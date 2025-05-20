import axios from 'axios';

interface SignInData {
  email: string;
  password: string;
}

export const postSignin = async (data: SignInData) => {
  const response = await axios.post('/api/auth/sign-in', data);
  return response;
};
