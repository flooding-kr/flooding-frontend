import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { deleteClub } from '../api/deleteClub';

function useDeleteClub() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: { id: string }) => deleteClub(data),
    onSuccess: () => {
      toast.success('동아리 삭제가 완료되었습니다.');
      router.push('/club');
    },
    onError: () => {
      toast.error('동아리 삭제에 실패했습니다.');
    },
  });
}

export default useDeleteClub;
