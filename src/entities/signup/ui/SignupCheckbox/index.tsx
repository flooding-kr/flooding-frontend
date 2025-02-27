'use client';

import React from 'react';
import { Controller, Control } from 'react-hook-form';

import Checkbox from '@/shared/ui/Checkbox';

import { FormType } from '../../model/formType';

type SignupCheckboxProps = {
  control: Control<FormType>;
};

export default function SignupCheckbox({ control }: SignupCheckboxProps) {
  return (
    <Controller
      name="checkbox"
      control={control}
      rules={{ required: '약관에 동의해야 합니다.' }}
      render={({ field }) => (
        <Checkbox
          checked={field.value}
          onChange={() => field.onChange(!field.value)}
          label="개인정보 처리방침"
        />
      )}
    />
  );
}
