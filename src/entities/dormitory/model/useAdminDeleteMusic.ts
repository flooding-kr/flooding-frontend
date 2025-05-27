'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { deleteAdminMusic } from '../api/deleteAdminMusic';

interface Props {
  id: string;
}

export const useAdminDeleteMusic = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => deleteAdminMusic({ id }),
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
