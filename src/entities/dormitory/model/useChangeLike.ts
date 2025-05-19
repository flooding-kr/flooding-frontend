'use client';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import patchLike from '../api/patchLike';

export const useChangeLike = () => {
  const { mutate } = useMutation({
    mutationFn: (id: string) => patchLike({ id }),
    onSuccess: () => {
      toast.success('좋아요 변경에 성공하셨습니다.');
    },
    onError: () => {
      toast.error('좋아요 변경에 실패하셨습니다.');
    },
  });

  return { mutate };
};
