'use client';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import patchLike from '../api/patchLike';

export const useChangeLike = () => {
  const { mutate } = useMutation({
    mutationFn: (id: string) => patchLike({ id }),
  });

  return { mutate };
};
