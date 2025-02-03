'use client';

import { DetailedHTMLProps, InputHTMLAttributes, forwardRef, useState } from 'react';

import { Eye, EyeClose } from '@/shared/assets/icons';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, type = 'text', placeholder, onChange, value, required, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(prev => !prev);
    };

    let inputType = type;
    if (type === 'password') {
      inputType = isPasswordVisible ? 'text' : 'password';
    }

    const inputStyle = {
      WebkitBoxShadow: '0 0 0 30px white inset !important',
      WebkitTextFillColor: 'inherit !important',
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    };

    const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div>
        <div className="relative w-full rounded-md border-[3px] p-[16px] bg-white">
          <div className="w-full">
            <label htmlFor={inputId} className="flex duration-200">
              <input
                {...props}
                id={inputId}
                ref={ref}
                type={inputType}
                className="w-full text-gray-500 text-body2R "
                style={inputStyle}
                placeholder={`${placeholder}`}
                onChange={handleChange}
                value={value}
              />
            </label>
            {type === 'password' && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-[16px] top-1/2 transform -translate-y-1/2"
              >
                {isPasswordVisible ? <Eye /> : <EyeClose />}
              </button>
            )}
          </div>
        </div>
        {error && <div className="mt-2 flex text-sm text-error">{error}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
