'use client';

import { count } from 'console';

import React from 'react';

interface Props {
  text: string;
  counter?: number;
  onClick?: () => void;
  disabled?: boolean;
}

function GrayBorderButton({ text, onClick, disabled, counter }: Props) {
  let buttonClass =
    'py-3 px-[14px] rounded-xl text-body3R mobile:text-body3R border border-solid border-gray-200 flex items-center gap-3 mobile:text-caption2M mobile:px-3';

  if (disabled) {
    buttonClass += ' bg-main-600 text-white';
  } else {
    buttonClass += ' text-gray-500';
  }

  return (
    <button
      type="button"
      onClick={onClick || (() => {})}
      className={buttonClass}
      disabled={disabled}
    >
      {text}
      {counter && <span className="text-body3B">{` ${counter}`}</span>}
    </button>
  );
}

export default GrayBorderButton;
