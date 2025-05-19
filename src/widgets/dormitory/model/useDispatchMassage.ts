import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { useFetchMassage } from '@/widgets/home/model/useFetchMassage';

import { postMassage } from '../api/postMassage';

function useDispatchMassage() {
  const { fetchMassage } = useFetchMassage();

  return useMutation({
    mutationFn: () => postMassage(),
    onSuccess: () => {
      fetchMassage();
      toast.success('안마의자 신청에 성공하였습니다.');
    },
    onError: () => {
      toast.error('안마의자 신청에 실패하였습니다.');
    },
  });
}

export default useDispatchMassage;
