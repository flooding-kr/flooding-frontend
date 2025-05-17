import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { postMassage } from '../api/postMassage';

function useDispatchMassage() {
  return useMutation({
    mutationFn: () => postMassage(),
    onSuccess: () => {
      toast.success('안마의자 신청에 성공하였습니다.');
    },
    onError: () => {
      toast.error('안마의자 신청에 실패하였습니다.');
    },
  });
}

export default useDispatchMassage;
