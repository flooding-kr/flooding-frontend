'use client';

import React from 'react';

import { X } from '@/shared/assets/icons';

interface Props {
  text: string;
  onClick?: () => void;
}

function StudentInfo({ text, onClick }: Props) {
  return (
    <div className="w-fit flex gap-3 py-[10px] px-[14px] rounded-2xl text-caption1R text-main-600 whitespace-nowrap border border-solid border-main-600 ">
      {text}
      <button type="button" className="w-5 h-5" onClick={() => onClick && onClick()}>
        <X color="#5E7EF3" />
      </button>
    </div>
  );
}

export default StudentInfo;
