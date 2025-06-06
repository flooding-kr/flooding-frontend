'use client';

import { CheckBoxFalse, CheckBoxTrue } from '@/shared/assets/icons';

interface Props {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function Checkbox({ label, checked, onChange }: Props) {
  const buttonId = `checkbox-button-${label}`;

  return (
    <div className="flex items-center gap-2 justify-between">
      <label htmlFor={buttonId} className="text-body3R text-gray-600 cursor-pointer">
        {label}
      </label>
      <button id={buttonId} type="button" onClick={() => onChange(!checked)} aria-pressed={checked}>
        {checked ? (
          <div className="w-6 h-6">
            <CheckBoxTrue />
          </div>
        ) : (
          <CheckBoxFalse />
        )}
      </button>
    </div>
  );
}

export default Checkbox;
