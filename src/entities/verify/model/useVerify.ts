import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { getVerify } from '../api/getVerify';

interface VerifyData {
  email: string;
  code: string;
}

export const useVerify = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: (data: VerifyData) => getVerify(data),
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: () => {
      toast.success('이메일 인증이 완료되었습니다.');
      setSuccess(true);
      setError(null);
      setIsLoading(false);
    },
    onError: (err: AxiosError<{ error: { reason: string } }>) => {
      const errorMessage = err.response?.data?.error?.reason || '이메일 인증에 실패했습니다.';
      setError(errorMessage);
      toast.error(errorMessage);
      setIsLoading(false);
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  return { ...mutation, error, success, isLoading };
};
