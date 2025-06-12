import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { deleteSelfStudy } from '../api/deleteSelfStudy';

function useDeleteSelfStudy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteSelfStudy(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['selfStudy'] });
      queryClient.invalidateQueries({ queryKey: ['selfStudyRank'] });
      toast.success('자습신청 삭제에 성공하였습니다.');
    },
    onError: () => {
      toast.error('자습신청 삭제에 실패하였습니다.');
    },
  });
}

export default useDeleteSelfStudy;
