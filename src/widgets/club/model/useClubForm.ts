import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { ClubType } from '@/shared/types/club';

import postCreateClub from '../api/postCreateClub';

interface CreateClubData {
  name: string;
  description: string;
  type: ClubType;
  classroom_id: number;
  main_image_url: string;
  activity_image_urls: string[];
}

function useClubForm() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: CreateClubData) => postCreateClub(data),
    onSuccess: () => {
      toast.success('동아리 개설 신청이 완료되었습니다.');
      router.push('/club');
    },
    onError: () => {
      toast.error('동아리 개설 신청에 실패했습니다.');
    },
  });
}

export default useClubForm;
