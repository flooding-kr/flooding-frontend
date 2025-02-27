import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { getReVerify } from '../api/getReVerify';

interface ReVerifyData {
  email: string;
}

export const useReVerify = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: (data: ReVerifyData) => getReVerify(data),
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: () => {
      toast.success('이메일 인증 재전송이 완료되었습니다.');
      setError(null);
      setIsLoading(false);
    },
    onError: (err: AxiosError<{ error: { reason: string } }>) => {
      const errorMessage =
        err.response?.data?.error?.reason || '이메일 인증 재전송에 실패했습니다.';
      setError(errorMessage);
      toast.error(errorMessage);
      setIsLoading(false);
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  return { ...mutation, error, isLoading };
};
