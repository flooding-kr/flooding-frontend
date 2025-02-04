import { useState } from 'react';

import { CheckBoxFalse, CheckBoxTrue } from '@/shared/assets/icons';

interface Props {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

function Checkbox({ label, checked, onChange }: Props) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <div className="w-full inline-flex items-center  justify-between">
      <label htmlFor="checkbox" className="text-body3R text-gray-600 cursor-pointer">
        {label}
      </label>
      <input
        id="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="hidden cursor-pointer"
      />
      <button
        type="button"
        onClick={handleChange}
        onKeyDown={handleChange}
        aria-pressed={isChecked}
      >
        {isChecked ? <CheckBoxTrue /> : <CheckBoxFalse />}
      </button>
    </div>
  );
}

export default Checkbox;
