import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { useFetchMassage } from '@/widgets/home/model/useFetchMassage';

import { deleteMassage } from '../api/deleteMassage';

function useDeleteMassage() {
  const { fetchMassage } = useFetchMassage();

  return useMutation({
    mutationFn: () => deleteMassage(),
    onSuccess: () => {
      fetchMassage();
      toast.success('안마의자 삭제에 성공하였습니다.');
    },
    onError: () => {
      toast.error('안마의자 삭제에 실패하였습니다.');
    },
  });
}

export default useDeleteMassage;
