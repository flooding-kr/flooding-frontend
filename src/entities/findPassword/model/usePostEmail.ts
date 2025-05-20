import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { postFindPassword } from '../api/postFindPassword';

interface DataType {
  email: string;
}

export const usePostEmail = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: DataType) => postFindPassword(data),
    onSuccess: () => {
      toast.success('비밀번호 변경이 성공하였습니다.');
      router.push('/signin/verify');
    },
    onError: () => {
      toast.error('비밀번호 변경이 실패하였습니다.');
    },
  });
};
