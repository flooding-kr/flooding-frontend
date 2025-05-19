'use client';

import { forwardRef, useEffect, useRef, useState } from 'react';

import { ArrowDown, ArrowUp } from '@/shared/assets/icons';

interface Props<T extends string | number> {
  onChange: (value: T) => void;
  items: T[];
  text: string;
  unit?: string;
  value?: T;
}

function Dropdown<T extends string | number>(
  { onChange, items, text, unit, value }: Props<T>,
  ref: React.Ref<HTMLDivElement>
) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T | string>(text);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  const closeDropdown = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleItemClick = (item: T) => {
    setSelectedItem(item);
    setIsOpen(false);
    onChange(item);
  };

  useEffect(() => {
    if (value) {
      setSelectedItem(value);
    }

    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  const showUnit = typeof selectedItem === 'number' && unit;

  return (
    <div ref={dropdownRef} className="relative inline-block text-left w-full">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex justify-between bg-white text-body2R rounded-md w-full p-4"
      >
        {selectedItem}
        {showUnit && ` ${unit}`}
        {isOpen ? (
          <div className="w-6 h-6">
            <ArrowUp />
          </div>
        ) : (
          <div className="w-6 h-6">
            <ArrowDown />
          </div>
        )}
      </button>
      {isOpen && (
        <div
          className={`absolute right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-full ${
            items.length > 4 ? 'max-h-40 overflow-y-auto' : ''
          }`}
        >
          <ul className="text-gray-500 text-body2R">
            {items.map(item => (
              <li key={item}>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => handleItemClick(item)}
                  className={`w-full text-left p-4 hover:bg-gray-100 cursor-pointer ${
                    selectedItem === item ? 'text-black text-body2B' : ''
                  }`}
                >
                  {item}
                  {typeof item === 'number' && unit}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default forwardRef(Dropdown) as <T extends string | number>(
  props: Props<T> & { ref?: React.Ref<HTMLDivElement> }
) => JSX.Element;
