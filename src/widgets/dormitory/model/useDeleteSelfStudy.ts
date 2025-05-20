import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { useFetchSelfStudy } from '@/widgets/home/model/useFetchSelfStudy';

import { deleteSelfStudy } from '../api/deleteSelfStudy';

function useDeleteSelfStudy() {
  const { fetchSelfStudy } = useFetchSelfStudy();

  return useMutation({
    mutationFn: () => deleteSelfStudy(),
    onSuccess: () => {
      fetchSelfStudy();
      toast.success('안마의자 삭제에 성공하였습니다.');
    },
    onError: () => {
      toast.error('안마의자 삭제에 실패하였습니다.');
    },
  });
}

export default useDeleteSelfStudy;
