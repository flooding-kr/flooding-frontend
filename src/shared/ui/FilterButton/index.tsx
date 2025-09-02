'use client';

import React from 'react';

import { Filter } from '@/shared/assets/icons';

interface Props {
  select?: boolean;
  onClick: () => void;
}

export default function FilterButton({ onClick, select }: Props) {
  let buttonStyle =
    'p-3 rounded-lg text-body2R flex items-center gap-3 mobile:text-body3R mobile:px-2 mobile:py-1 ';

  if (select) {
    buttonStyle += 'border border-solid border-main-600 bg-main-600 bg-gray-400 text-white';
  } else {
    buttonStyle += 'border border-solid border-main-600 text-main-600';
  }
  return (
    <button type="button" className={buttonStyle} onClick={onClick}>
      <div className="w-6 h-6 mobile:w-4 mobile:h-4">
        <Filter select={select} />
      </div>
      필터
    </button>
  );
}
