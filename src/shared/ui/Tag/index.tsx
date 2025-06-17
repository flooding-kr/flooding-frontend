'use client';

import React from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Tag({ text, onClick, disabled }: Props) {
  let buttonClass =
    'py-2 px-4 rounded-lg text-body2R mobile:text-body3R border border-solid border-main-600 laptop:py-1 laptop:px-4 mobile:text-caption2M mobile:!px-3';

  if (disabled) {
    buttonClass += ' bg-main-600 bg-gray-400 text-white';
  } else {
    buttonClass += ' text-main-600';
  }

  return (
    <button
      type="button"
      onClick={onClick || (() => {})}
      className={buttonClass}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Tag;
