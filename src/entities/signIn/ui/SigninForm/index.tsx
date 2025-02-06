'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, Checkbox, Dropdown, Input } from '@/shared/ui';

type FormType = {
  email: string;
  password: string;
  checkbox: boolean;
  dropbox1: string;
  dropbox2: string;
  dropbox3: string;
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
        <div className="flex gap-2">
          <Controller
            name="dropbox1"
            control={control}
            rules={{ required: '기수를 선택해주세요.' }}
            render={({ field }) => (
              <Dropdown
                {...field}
                text="기수 선택"
                items={['7기', '8기', '9기']}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            name="dropbox2"
            control={control}
            rules={{ required: '번호를 선택해주세요.' }}
            render={({ field }) => (
              <Dropdown
                {...field}
                text="반 선택"
                items={['1', '2', '3', '4']}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            name="dropbox3"
            control={control}
            rules={{ required: '반을 선택해주세요.' }}
            render={({ field }) => (
              <Dropdown
                {...field}
                text="번호 선택"
                items={[
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                  '14',
                  '15',
                  '16',
                  '17',
                  '18',
                ]}
                onChange={field.onChange}
              />
            )}
          />
        </div>
      </div>
      <div className="mt-20">
        <Button text="확인" type="submit" />
      </div>
    </form>
  );
}
