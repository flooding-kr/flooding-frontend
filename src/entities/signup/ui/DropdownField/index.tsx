import React from 'react';
import { Controller, Control, RegisterOptions, FieldValues, Path } from 'react-hook-form';

import Dropdown from '@/shared/ui/Dropdown';

type DropdownFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions<T>;
  label: string;
  items: number[];
  unit: string;
};

function DropdownField<T extends FieldValues>({
  name,
  control,
  rules,
  label,
  items,
  unit,
}: DropdownFieldProps<T>) {
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
