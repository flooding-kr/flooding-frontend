'use client';

import React from 'react';

import { Filter } from '@/shared/assets/icons';

interface Props {
  select: boolean;
  onClick: () => void;
}

export default function FilterButton({ onClick, select }: Props) {
  let buttonStyle = 'py-3 px-3 rounded-lg text-body2R flex gap-3 mobile:text-body2R ';

  if (select) {
    buttonStyle += 'border border-solid border-main-600 bg-main-600 bg-gray-400 text-white';
  } else {
    buttonStyle += 'border border-solid border-main-600 text-main-600';
  }
  return (
    <button type="button" className={buttonStyle} onClick={onClick}>
      <Filter select={select} />
      필터
    </button>
  );
}
