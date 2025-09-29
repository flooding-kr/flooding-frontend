import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { ClubType } from '@/shared/types/club';

import patchEditClub from '../api/patchEditClub';

interface EditClubData {
  name: string;
  description: string;
  type: ClubType;
  classroom_id: number;
  thumbnail_image_key: string;
  activity_image_keys: string[];
  id: string;
}

function useEdit() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: EditClubData) => patchEditClub(data),
    onSuccess: () => {
      toast.success('동아리 수정이 완료되었습니다.');
      router.push('/club');
    },
    onError: () => {
      toast.error('동아리 수정에 실패했습니다.');
    },
  });
}

export default useEdit;
