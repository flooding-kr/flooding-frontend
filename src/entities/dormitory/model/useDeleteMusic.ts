'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { deleteMusic } from '../api/deleteMusic';

export const useDeleteMusic = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => deleteMusic(),
    onSuccess: () => {
      toast.success('음악 삭제에 성공하셨습니다.');
      queryClient.invalidateQueries({ queryKey: ['music'] });
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return { mutate };
};
