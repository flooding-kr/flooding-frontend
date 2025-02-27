'use client';

import { useEffect, useRef, useState } from 'react';

import { ArrowDown, ArrowUp } from '@/shared/assets/icons';

interface Props {
  onChange: (value: number) => void;
  items: number[];
  text: string;
  unit: string;
}

export default function Dropdown({ onChange, items, text, unit }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | string>(text);
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

  const handleItemClick = (item: number) => {
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

  return (
    <div ref={dropdownRef} className="relative inline-block text-left w-full">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex justify-between bg-white text-body2R rounded-md w-full p-4"
      >
        {selectedItem}
        {typeof selectedItem === 'number' && ` ${unit}`}
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </button>
      {isOpen && (
        <div
          className={`absolute right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-full ${items.length > 4 ? 'max-h-40 overflow-y-auto ' : ''}`}
        >
          <ul className="text-gray-500 text-body2R">
            {items.map(item => (
              <li key={item}>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => handleItemClick(item)}
                  className={`w-full text-left p-4 hover:bg-gray-100 cursor-pointer ${selectedItem === item ? 'text-black text-body2B' : ''}`}
                >
                  {item}
                  {unit}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
