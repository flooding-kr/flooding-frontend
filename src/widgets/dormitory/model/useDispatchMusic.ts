import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { getDate } from '@/entities/home/model/getDate';

import { useFetchMusic } from './useFetchMusic';
import { postMusic } from '../api/postMusic';
import { useMusicTypeStore } from '../store/useMusicTypeStore';

interface Props {
  music: string;
}

function useDispatchMusic({ music }: Props) {
  const [loading, setLoading] = useState(false);
  const { year, month, day } = getDate();
  const { type } = useMusicTypeStore();
  const currentDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const { fetchMusic } = useFetchMusic({ date: currentDate, type });

  const { mutate } = useMutation({
    mutationFn: async () => {
      setLoading(true);
      await postMusic({ music });
    },
    onSuccess: () => {
      toast.success('음악 신청에 성공하였습니다.');
      fetchMusic();
    },
    onError: error => {
      toast.error((error as any)?.response?.data?.error ?? '요청 중 오류가 발생했습니다.');
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  return { loading, mutate };
}

export default useDispatchMusic;
