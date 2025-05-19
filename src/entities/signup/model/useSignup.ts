import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { useModalPageStore } from '@/entities/signup/store/useStore';

import { postSignup } from '../api/postSignup';

interface SignUpData {
  name: string;
  email: string;
  role: 'STUDENT' | 'TEACHER';
  password: string;
  gender: 'MALE' | 'FEMALE';
  checkbox: boolean;
  // 학생 전용
  year?: number;
  classroom?: number;
  number?: number;
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
