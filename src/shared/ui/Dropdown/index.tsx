'use client';

import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

import { ArrowDown, ArrowUp } from '@/shared/assets/icons';

type OptionValue = string | number;
type Option = { label: string; value: OptionValue };

interface Props<T extends OptionValue> {
  onChange: (value: T) => void;
  items: Array<OptionValue> | Array<Option>;
  text: string;
  value?: T;
  label?: string;
  unit?: string;
  showUnit?: boolean;
}

function Dropdown<T extends OptionValue>(
  { onChange, items, text, unit, value, label, showUnit = true }: Props<T>,
  ref: React.Ref<HTMLDivElement>
) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options: Option[] = useMemo(() => {
    if (items.length === 0) return [];
    const sample = items[0] as any;
    if (typeof sample === 'object' && sample && 'label' in sample && 'value' in sample) {
      return (items as Array<Option>).map(o => ({ label: o.label, value: o.value }));
    }
    return (items as Array<OptionValue>).map(v => ({ label: String(v), value: v }));
  }, [items]);

  const [internalValue, setInternalValue] = useState<OptionValue | undefined>(value);
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const selectedOption = options.find(o => o.value === internalValue);
  const displayLabel = selectedOption ? selectedOption.label : text;

  const shouldShowUnit = showUnit && !!selectedOption && !!unit;

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  const closeOnOutsideClick = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, []);

  const handleItemClick = (opt: Option) => {
    setIsOpen(false);
    setInternalValue(opt.value);
    onChange(opt.value as T);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left w-full" aria-label={label}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center justify-between bg-white text-body2R rounded-md w-full p-4 border border-gray-300"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate">
          {displayLabel}
          {shouldShowUnit ? ` ${unit}` : ''}
        </span>
        <span className="w-6 h-6" aria-hidden>
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </span>
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-full ${
            items.length > 4 ? 'max-h-40 overflow-y-auto' : ''
          }`}
          role="listbox"
        >
          <ul className="text-gray-700 text-body2R">
            {options.map(opt => {
              const isSelected = internalValue === opt.value;
              return (
                <li key={String(opt.value)} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    onClick={() => handleItemClick(opt)}
                    className={`w-full text-left p-4 hover:bg-gray-100 cursor-pointer ${
                      isSelected ? 'text-black text-body2B' : ''
                    }`}
                  >
                    {opt.label}
                    {unit ? ` ${unit}` : ''}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default forwardRef(Dropdown) as <T extends OptionValue>(
  props: Props<T> & { ref?: React.Ref<HTMLDivElement> }
) => JSX.Element;
