import React, { useState } from 'react';

import Tag from '../Tag';

interface Props {
  title: string;
  options: string[];
  onChange: (selected: string) => void;
}

export default function FilterContainer({ title, options, onChange }: Props) {
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelected(option);
    onChange(option);
  };

  return (
    <div className="flex items-center">
      <p className="mr-2 text-body2R text-main-600">{title}</p>
      <div className="flex gap-4">
        {options.map(option => (
          <Tag
            key={option}
            text={option}
            disabled={selected === option}
            onClick={() => handleSelect(option)}
          />
        ))}
      </div>
    </div>
  );
}
