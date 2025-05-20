'use client';

import React, { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  register?: UseFormRegisterReturn;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ title, placeholder, register, onChange, maxLength = 0, ...props }, ref) => {
    const [charCount, setCharCount] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(e);
      }

      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;

      setCharCount(e.target.value.length);
    };

    return (
      <div className="relative">
        <div className="w-full p-[16px] rounded-lg bg-white">
          <textarea
            rows={1}
            className="w-full h-full border-none outline-none resize-none bg-white text-black placeholder-gray-500 text-body2R"
            placeholder={placeholder}
            maxLength={maxLength}
            {...register}
            {...props}
            ref={ref}
            onChange={e => {
              handleChange(e);
            }}
          />
        </div>
        <span
          className={`absolute right-0 text-caption1R ${maxLength === charCount ? 'text-main-600' : 'text-gray-500'}`}
        >
          {charCount}/{maxLength}
        </span>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
