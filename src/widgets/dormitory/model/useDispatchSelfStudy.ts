import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { useFetchSelfStudy } from '@/widgets/home/model/useFetchSelfStudy';

import { postSelfStudy } from '../api/postSelfStudy';

function useDispatchSelfStudy() {
  const { fetchSelfStudy } = useFetchSelfStudy();

  return useMutation({
    mutationFn: () => postSelfStudy(),
    onSuccess: () => {
      fetchSelfStudy();
      toast.success('자습 신청에 성공하였습니다.');
    },
    onError: () => {
      toast.error('자습 신청에 실패하였습니다.');
    },
  });
}

export default useDispatchSelfStudy;
