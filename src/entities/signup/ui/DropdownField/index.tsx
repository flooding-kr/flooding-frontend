import React from 'react';
import { Controller, Control, RegisterOptions, FieldValues, Path } from 'react-hook-form';

import Dropdown from '@/shared/ui/Dropdown';

type DropdownFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions<T>;
  label: string;
  items: number[] | { label: string; value: string }[];
  unit: string;
  showUnit?: boolean;
};

function DropdownField<T extends FieldValues>({
  name,
  control,
  rules,
  label,
  items,
  unit,
  showUnit,
}: DropdownFieldProps<T>) {
  const formattedItems =
    Array.isArray(items) && typeof items[0] === 'object'
      ? items
      : (items as number[]).map(value => ({ label: String(value), value }));

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Dropdown
          {...field}
          items={formattedItems}
          text={label}
          label={label}
          unit={unit}
          onChange={(value: number | string) => field.onChange(value)}
          showUnit={showUnit}
        />
      )}
    />
  );
}

export default DropdownField;
