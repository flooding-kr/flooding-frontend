'use client';

import { DetailedHTMLProps, InputHTMLAttributes, forwardRef, useState } from 'react';

import { Eye, EyeClose } from '@/shared/assets/icons';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string;
  bg?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, type = 'text', placeholder, onChange, value, bg = false, required, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(prev => !prev);
    };

    const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

    const inputStyle = {
      WebkitBoxShadow: bg ? '' : '0 0 0 30px white inset !important',
      WebkitTextFillColor: 'inherit !important',
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className="w-full">
        <div
          className={`relative w-full rounded-md border-[3px] p-4  mobile:px-2 mobile:py-3  ${
            bg ? 'bg-gray-100' : 'bg-white'
          }`}
        >
          <div className="w-full">
            <label htmlFor={props.id} className="flex duration-200">
              <input
                {...props}
                ref={ref}
                type={inputType}
                className="w-full text-black placeholder-gray-500 bg-transparent text-body2R mobile:text-body3R"
                style={inputStyle}
                placeholder={placeholder}
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
