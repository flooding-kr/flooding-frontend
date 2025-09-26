import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { postNotify } from '../api/postNotify';

interface Props {
  title: string;
  description: string;
}

function useDispatchNotify({ title, description }: Props) {
  return useMutation({
    mutationFn: () => postNotify({ title, description }),
    onSuccess: () => {
      toast.success('공지사항 등록에 성공하였습니다.');
    },
    onError: () => {
      toast.error('공지사항 등록에 실패하였습니다.');
    },
  });
}

export default useDispatchNotify;
