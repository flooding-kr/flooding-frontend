import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { postSignin } from '../api/postSignin';

interface SignInData {
  email: string;
  password: string;
}

export const useSignin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: SignInData) => postSignin(data),
    onSuccess: () => {
      toast.success('로그인이 완료되었습니다.');
      router.push('/');
    },
    onError: (err: AxiosError<{ error: string }>) => {
      toast.error(err.response?.data.error);
    },
  });
};
