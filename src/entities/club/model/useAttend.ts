import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { useClubStore } from '@/widgets/Attendance/store/useClubStore';

import { postAttend } from '../api/postAttend';

function useAttend() {
  const { period, id } = useClubStore();
  const { mutate } = useMutation({
    mutationFn: () => postAttend({ period, id }),
    onSuccess: () => {
      toast.success('출석에 성공했습니다.');
    },
    onError: () => {
      toast.error('출석에 실패했습니다.');
    },
  });

  return { mutate };
}

export default useAttend;
