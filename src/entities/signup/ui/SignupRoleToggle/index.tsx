'use client';

import React from 'react';
import { Controller, Control } from 'react-hook-form';

import ToggleButton from '@/shared/ui/ToggleButton';

import { FormType } from '../../model/formType';

type SignupRoleToggleProps = {
  control: Control<FormType>;
};

export default function SignupRoleToggle({ control }: SignupRoleToggleProps) {
  return (
    <Controller
      name="role"
      control={control}
      rules={{ required: '학생/선생님을 선택해주세요.' }}
      render={({ field }) => (
        <ToggleButton
          text1={['학생', 'STUDENT']}
          text2={['선생님', 'TEACHER']}
          value={field.value}
          setValue={field.onChange}
        />
      )}
    />
  );
}
