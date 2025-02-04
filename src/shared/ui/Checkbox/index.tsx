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
      <button id={buttonId} type="button" onClick={() => onChange(!checked)} aria-pressed={checked}>
        {checked ? <CheckBoxTrue /> : <CheckBoxFalse />}
      </button>
      <label htmlFor={buttonId} className="text-body3R text-gray-600 cursor-pointer">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
