import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { getDate } from '@/entities/home/model/getDate';

import { useFetchMusic } from './useFetchMusic';
import { postMusic } from '../api/postMusic';
import { useMusicTypeStore } from '../store/useMusicTypeStore';

interface Props {
  music: string;
}

function useDispatchMusic({ music }: Props) {
  const { year, month, day } = getDate();
  const { type } = useMusicTypeStore();
  const currentDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const { fetchMusic } = useFetchMusic({ date: currentDate, type });

  return useMutation({
    mutationFn: () => postMusic({ music }),
    onSuccess: () => {
      toast.success('음악 신청에 성공하였습니다.');
      fetchMusic();
    },
    onError: error => {
      toast.error((error as any)?.response?.data?.error);
    },
  });
}

export default useDispatchMusic;
