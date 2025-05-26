import { useMutation, useQueryClient } from '@tanstack/react-query';
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
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      await postMusic({ music });
    },
    onSuccess: () => {
      toast.success('음악 신청에 성공하였습니다.');
      queryClient.invalidateQueries({ queryKey: ['music'] });
    },
    onError: error => {
      toast.error((error as any)?.response?.data?.error ?? '요청 중 오류가 발생했습니다.');
    },
  });

  return { isPending, mutate };
}

export default useDispatchMusic;
