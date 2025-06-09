import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { deleteMassage } from '../api/deleteMassage';

function useDeleteMassage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteMassage(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['massage', 'massageRank'] });
      toast.success('안마의자 삭제에 성공하였습니다.');
    },
    onError: () => {
      toast.error('안마의자 삭제에 실패하였습니다.');
    },
  });
}

export default useDeleteMassage;
