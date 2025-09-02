import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { useClubStore } from '@/widgets/Attendance/store/useClubStore';

import { deleteAttend } from '../api/deleteAttend';
import { postAttend } from '../api/postAttend';

function useAttend() {
  const { period, id } = useClubStore();
  const reason = '';
  const { mutate } = useMutation({
    mutationFn: () => deleteAttend({ period, id, reason }),
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
