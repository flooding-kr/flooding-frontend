'use client';

import React, { useState } from 'react';

import { FilterContainer } from '@/shared/ui';

function AllClubListHeader() {
  const [clubType, setClubType] = useState<string>('');

  return (
    <header className="w-full flex justify-between">
      <p className="text-title3B text-black">동아리 목록</p>
      <FilterContainer
        options={['자율동아리', '전공동아리', '취업동아리']}
        onChange={value => setClubType(value)}
      />
    </header>
  );
}

export default AllClubListHeader;
