'use client';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { getDate } from '@/entities/home/model/getDate';
import { useFetchMusic } from '@/widgets/dormitory/model/useFetchMusic';
import { useMusicTypeStore } from '@/widgets/dormitory/store/useMusicTypeStore';

import { deleteMusic } from '../api/deleteMusic';

export const useDeleteMusic = () => {
  const { year, month, day } = getDate();
  const { type } = useMusicTypeStore();
  const currentDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const { fetchMusic } = useFetchMusic({ date: currentDate, type });

  const { mutate } = useMutation({
    mutationFn: () => deleteMusic(),
    onSuccess: () => {
      toast.success('음악 삭제에 성공하셨습니다.');
      fetchMusic();
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return { mutate };
};
