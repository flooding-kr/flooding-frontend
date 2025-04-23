'use client';

import React, { useState } from 'react';

import Tag from '../Tag';

interface Props<T extends string | number> {
  title?: string;
  options: T[];
  unit?: string;
  onChange: (selected: T) => void;
}

export default function FilterContainer<T extends string | number>({
  title,
  options,
  unit = '',
  onChange,
}: Props<T>) {
  const [selected, setSelected] = useState<T>(options[0]);

  const handleSelect = (option: T) => {
    setSelected(option);
    onChange(option);
  };

  return (
    <div className="flex items-center">
      <p className="mr-2 text-body2R text-main-600">{title}</p>
      <div className="flex gap-4 tablet:gap-2">
        {options.map(option => (
          <Tag
            key={option.toString()}
            text={`${option}${unit}`}
            disabled={selected === option}
            onClick={() => handleSelect(option)}
          />
        ))}
      </div>
    </div>
  );
}
