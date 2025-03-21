import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { postResetPassword } from '../api/postResetPassword';

interface DataType {
  email: string;
  code: string;
  password: string;
}

export const useResetPassword = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: DataType) => postResetPassword(data),
    onSuccess: () => {
      toast.success('비밀번호 변경이 성공하였습니다.');
      router.push('/signin');
    },
    onError: () => {
      toast.error('비밀번호 변경이 실패하였습니다.');
    },
  });
};
