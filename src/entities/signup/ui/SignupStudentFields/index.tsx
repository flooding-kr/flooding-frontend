'use client';

import React from 'react';
import { Control } from 'react-hook-form';

import { FormType } from '../../model/formType';
import DropdownField from '../DropdownField';

type SignupStudentFieldsProps = {
  control: Control<FormType>;
};

export default function SignupStudentFields({ control }: SignupStudentFieldsProps) {
  return (
    <div className="flex gap-2">
      <DropdownField
        name="year"
        control={control}
        rules={{ required: '기수를 선택해주세요.' }}
        label="기수 선택"
        items={[7, 8, 9]}
        unit="기"
      />
      <DropdownField
        name="classroom"
        control={control}
        rules={{ required: '반을 선택해주세요.' }}
        label="반 선택"
        items={[1, 2, 3, 4]}
        unit="반"
      />
      <DropdownField
        name="number"
        control={control}
        rules={{ required: '번호를 선택해주세요.' }}
        label="번호 선택"
        items={Array.from({ length: 18 }, (_, i) => i + 1)}
        unit="번"
      />
    </div>
  );
}
