'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, Checkbox, Input } from '@/shared/ui';

type FormType = {
  email: string;
  password: string;
  checkbox: boolean;
};

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit = (data: FormType) => {
    // eslint-disable-next-line
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <Controller
          name="checkbox"
          control={control}
          rules={{ required: '약관에 동의해야 합니다.' }}
          render={({ field }) => (
            <Checkbox checked={field.value} onChange={field.onChange} label="약관에 동의합니다" />
          )}
        />
      </div>
      <div className="mt-20">
        <Button text="확인" type="submit" />
      </div>
    </form>
  );
}
