'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { showError } from '@/shared/libs/showError';
import { Button, Input } from '@/shared/ui';

import { usePostEmail } from '../../model/usePostEmail';
import { useEmailStore } from '../../store/useStore';

type FormType = {
  email: string;
};

export default function EmailForm() {
  const { register, handleSubmit, watch } = useForm<FormType>();
  const { setEmail } = useEmailStore();
  const { mutate: postEmail } = usePostEmail();

  const isEmailFilled = !!watch('email');

  const onSubmit = (data: FormType) => {
    setEmail(data.email);
    postEmail(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, formErrors => {
        const firstError = Object.values(formErrors)[0];
        if (firstError && firstError.message) {
          showError(firstError.message as string);
        }
      })}
      className="w-full flex flex-col gap-20"
    >
      <div className="w-full">
        <Input
          {...register('email', {
            required: '이메일을 입력해주세요.',
          })}
          placeholder="이메일을 입력해주세요"
        />
      </div>
      <Button text="확인" type="submit" disabled={!isEmailFilled} />
    </form>
  );
}
