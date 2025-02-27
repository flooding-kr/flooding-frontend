import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { useModalPageStore } from '@/entities/signup/store/useStore';

import { postSignup } from '../api/postSignup';

interface SignUpData {
  email: string;
  password: string;
  classroom: number;
  number: number;
  year: number;
  name: string;
  gender: 'MALE' | 'FEMALE';
}

export const useSignup = () => {
  const { setModalPage } = useModalPageStore();

  return useMutation({
    mutationFn: (data: SignUpData) => postSignup(data),
    onSuccess: () => {
      toast.success('회원가입이 완료되었습니다.');
      setModalPage(1);
    },
    onError: () => {
      toast.error('회원가입에 실패했습니다.');
    },
  });
};
