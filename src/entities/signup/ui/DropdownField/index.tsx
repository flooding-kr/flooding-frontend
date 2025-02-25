import React from 'react';
import { Controller } from 'react-hook-form';

import Dropdown from '@/shared/ui/Dropdown';

type DropdownFieldProps = {
  name: string;
  control: any;
  rules: any;
  label: string;
  items: number[];
  unit: string;
};

function DropdownField({ name, control, rules, label, items, unit }: DropdownFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Dropdown
          {...field}
          items={items}
          text={label}
          unit={unit}
          onChange={(value: number) => field.onChange(value)}
        />
      )}
    />
  );
}

export default DropdownField;
