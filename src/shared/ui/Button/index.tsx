/* eslint-disable react/button-has-type */

'use client';

import React from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  closed?: boolean;
  toggle?: boolean;
  error?: boolean;
  homebasemobile?: boolean;
}

function Button({
  text,
  onClick,
  disabled,
  type = 'button',
  closed,
  toggle,
  homebasemobile,
  error,
}: Props) {
  let buttonClass =
    'w-full p-4 rounded-lg text-white text-body2B mobile:text-body3B mobile:px-2 mobile:py-3';
  if (closed) {
    buttonClass += ' bg-main-400';
  } else if (disabled) {
    buttonClass += ' bg-gray-400';
  } else if (toggle) {
    buttonClass += ' bg-white !text-gray-500';
  } else if (homebasemobile) {
    buttonClass += ' bg-main-100 !text-main-600';
  } else if (error) {
    buttonClass += ' bg-error !text-white';
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
