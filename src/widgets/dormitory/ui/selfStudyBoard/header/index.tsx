'use client';

import React, { useState } from 'react';

import { Book } from '@/shared/assets/icons';
import FilterButton from '@/shared/ui/FilterButton';

function SelfStudyHeader() {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <header className="flex flex-1 justify-between items-center w-full">
      <div className="flex items-center gap-6">
        <Book size={40} />
        <p className="text-title3B text-black">자습 신청</p>
      </div>
      <FilterButton onClick={() => setSelected(!selected)} select={selected} />
    </header>
  );
}

export default SelfStudyHeader;
