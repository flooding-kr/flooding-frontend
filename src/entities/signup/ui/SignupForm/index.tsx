'use client';

import React, { useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { Button, Input } from '@/shared/ui';

import { FormType } from '../../model/formType';
import { showError } from '../../model/showError';
import { useSignup } from '../../model/useSignup';
import { useSignupStore } from '../../store/useStore';
import {
  SignupRoleToggle,
  SignupStudentFields,
  SignupGenderToggle,
  SignupCheckbox,
} from '../SignupFormElements';

export default function SignupForm() {
  const { setName, setEmail } = useSignupStore();
  const { mutate: signup } = useSignup();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormType>();

  const formValues = watch();
  const isFormValid = useMemo(() => {
    const requiredFields: (keyof FormType)[] = ['name', 'email', 'password', 'gender', 'role'];
    const isBasicValid = requiredFields.every(field => !!formValues[field]);

    if (formValues.role === 'STUDENT') {
      return (
        isBasicValid &&
        !!formValues.year &&
        !!formValues.classroom &&
        !!formValues.number &&
        formValues.checkbox === true
      );
    }
    if (formValues.role === 'TEACHER') {
      return isBasicValid && formValues.checkbox === true;
    }

    return false;
  }, [formValues]);

  const selectedRole = useWatch({ control, name: 'role' });
  const isStudent = selectedRole === 'STUDENT';

  const passwordValidation = {
    required: '비밀번호를 입력해주세요.',
    validate: (value: string) => {
      if (value.length < 8) return '비밀번호는 최소 8자리여야 합니다.';
      if (!/[A-Z]/.test(value)) return '비밀번호에 대문자가 포함되어야 합니다.';
      if (!/[!@#$%^&*]/.test(value)) return '비밀번호에 특수문자가 포함되어야 합니다.';
      return true;
    },
  };

  const onSubmit = (data: FormType) => {
    setName(data.name);
    setEmail(data.email);
    signup(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, formErrors => {
        const firstError = Object.values(formErrors)[0];
        if (firstError?.message) {
          showError(firstError.message);
        }
      })}
    >
      <div className="flex flex-col gap-4">
        <Input
          {...register('name', { required: '이름을 입력해주세요.' })}
          placeholder="이름을 입력해주세요"
          error={errors.name?.message}
        />
        <Input
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: '올바른 이메일 형식을 입력해주세요.',
            },
          })}
          placeholder="이메일을 입력해주세요"
          error={errors.email?.message}
        />
        <SignupRoleToggle control={control} />
        {isStudent && <SignupStudentFields control={control} />}
        <Input
          {...register('password', passwordValidation)}
          type="password"
          placeholder="비밀번호를 입력해주세요"
          error={errors.password?.message}
        />

        <SignupGenderToggle control={control} />
        <SignupCheckbox control={control} setValue={setValue} />
      </div>

      <div className="mt-20">
        <Button text="확인" type="submit" disabled={!isFormValid} />
      </div>
    </form>
  );
}
