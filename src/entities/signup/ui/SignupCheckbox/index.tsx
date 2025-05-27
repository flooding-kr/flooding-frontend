import React, { useState } from 'react';
import { Controller, Control, UseFormSetValue } from 'react-hook-form';

import Checkbox from '@/shared/ui/Checkbox';

import { FormType } from '../../model/formType';
import PrivacyPolicyModal from '../PrivacyPolicyModal';

type Props = {
  control: Control<FormType>;
  setValue: UseFormSetValue<FormType>;
};

export default function SignupCheckbox({ control, setValue }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Controller
        name="checkbox"
        control={control}
        rules={{ required: '약관에 동의해야 합니다.' }}
        render={({ field }) => (
          <Checkbox
            checked={field.value}
            onChange={() => {
              if (field.value) {
                setValue('checkbox', false);
              } else {
                setOpen(true);
              }
            }}
            label="개인정보 처리방침 동의"
          />
        )}
      />
      {open && (
        <PrivacyPolicyModal
          onClose={() => {
            setOpen(false);
          }}
          onConfirm={() => {
            setValue('checkbox', true);
            setOpen(false);
          }}
        />
      )}
    </>
  );
}
