'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@/shared/ui';

import { showError } from '../../model/showError';
import { useSignin } from '../../model/useSignin';

type FormType = {
  email: string;
  password: string;
};

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const { mutate: signin } = useSignin();

  return (
    <form
      onSubmit={handleSubmit(
        data => signin(data),
        formErrors => {
          const firstError = Object.values(formErrors)[0];
          if (firstError && firstError.message) {
            showError(firstError.message as string);
          }
        }
      )}
    >
      <div className="flex flex-col gap-4">
        <Input
          {...register('email', {
            required: '이메일을 입력해주세요.',
          })}
          placeholder="이메일을 입력해주세요"
          error={errors.email?.message}
        />
        <Input
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
              message: '비밀번호는 8자리 이상, 대문자 1개, 특수문자 1개 이상을 포함해야 합니다.',
            },
          })}
          type="password"
          placeholder="비밀번호를 입력해주세요"
          error={errors.password?.message}
        />
      </div>
      <div className="mt-20">
        <Button text="확인" type="submit" />
      </div>
    </form>
  );
}
