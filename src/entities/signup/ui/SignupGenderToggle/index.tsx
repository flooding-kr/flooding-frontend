'use client';

import React from 'react';
import { Controller, Control } from 'react-hook-form';

import ToggleButton from '@/shared/ui/ToggleButton';

import { FormType } from '../../model/formType';

type SignupGenderToggleProps = {
  control: Control<FormType>;
};

export default function SignupGenderToggle({ control }: SignupGenderToggleProps) {
  return (
    <Controller
      name="gender"
      control={control}
      rules={{ required: '성별을 선택해주세요.' }}
      render={({ field }) => (
        <ToggleButton
          text1={['남성', 'MALE']}
          text2={['여성', 'FEMALE']}
          value={field.value}
          setValue={field.onChange}
        />
      )}
    />
  );
}
