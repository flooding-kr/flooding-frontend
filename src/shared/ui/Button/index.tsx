/* eslint-disable react/button-has-type */

'use client';

import React from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

function Button({ text, onClick, disabled, type = 'button' }: Props) {
  let buttonClass = 'w-full p-4 rounded-lg text-white text-body2B mobile:text-body3R';

  if (disabled) {
    buttonClass += ' bg-gray-400';
  } else {
    buttonClass += ' bg-main-600';
  }

  return (
    <button
      type={type || 'button'}
      onClick={onClick || (() => {})}
      className={buttonClass}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
