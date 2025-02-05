'use client';

import React, { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react';

import Search from '@/shared/assets/icons/Search';
import useDebounce from '@/shared/hooks/useDebounce';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onDebounce?: (value: string) => void;
  debounceTime?: number;
}

function SearchInput({
  placeholder,
  onChange,
  onDebounce,
  value,
  debounceTime = 500,
  ...props
}: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedValue = useDebounce(searchTerm, debounceTime);

  useEffect(() => {
    if (debouncedValue === searchTerm) {
      onDebounce?.(debouncedValue);
    }
  }, [debouncedValue, searchTerm, onDebounce]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="relative w-full rounded-lg px-6 py-4 bg-gray-100">
        <div className="w-full flex justify-between">
          <input
            type="text"
            className="w-full text-body2R text-black bg-transparent placeholder-gray-500"
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            {...props}
          />
          <div className="w-9 h-9">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
