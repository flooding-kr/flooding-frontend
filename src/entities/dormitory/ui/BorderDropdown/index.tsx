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

function BorderDropdown<T extends string | number>(
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
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);
  useEffect(() => {
    if (value !== undefined) {
      setSelectedItem(value);
    }
  }, [value]);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left ">
      <button
        type="button"
        onClick={toggleDropdown}
        className={`flex justify-between gap-3 text-body3R rounded-md p-3 w-[123px] border-[1px] border-solid border-main-600 ${isOpen ? 'bg-main-600 text-white' : 'bg-white text-main-600'}`}
      >
        {selectedItem}
        {isOpen ? (
          <ArrowUp color={isOpen ? '#ffffff' : '#5E7EF3'} />
        ) : (
          <ArrowDown color={isOpen ? '#ffffff' : '#5E7EF3'} />
        )}
      </button>
      {isOpen && (
        <div
          className={`absolute top-16 right-0 bg-white rounded-lg shadow-lg z-10 w-full ${
            items.length > 4 ? 'max-h-40 overflow-y-auto' : ''
          }`}
        >
          <ul className="text-gray-500 text-body2R bg-main-600 rounded-lg">
            {items.map(item => (
              <li
                key={item}
                className="p-4 first:border-none border-t-1px border-white border-solid "
              >
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => handleItemClick(item)}
                  className={`w-full text-left text-body3B bg-main-600 hover:text-white cursor-pointer ${
                    selectedItem === item ? 'text-white' : 'text-gray-400'
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

export default forwardRef(BorderDropdown) as <T extends string | number>(
  props: Props<T> & { ref?: React.Ref<HTMLDivElement> }
) => JSX.Element;
