'use client';

import React from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.JSX.Element;
}

function Tag({ text, onClick, disabled, icon: Icon }: Props) {
  let buttonClass =
    'py-2 px-4 rounded-lg text-body2R mobile:text-body3R border border-solid border-main-600 laptop:py-1 mobile:text-caption2M mobile:px-3';

  if (disabled) {
    buttonClass += ' bg-main-600 bg-gray-400 text-white';
  } else {
    buttonClass += ' text-main-600';
  }

  if (Icon) {
    buttonClass += ' flex gap-3 !p-3 !text-body3R';
  }

  return (
    <button
      type="button"
      onClick={onClick || (() => {})}
      className={buttonClass}
      disabled={disabled}
    >
      {text}
      {Icon}
    </button>
  );
}

export default Tag;
