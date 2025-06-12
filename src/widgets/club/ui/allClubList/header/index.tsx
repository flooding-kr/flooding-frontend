'use client';

import React, { useEffect, useState } from 'react';

import { useClubTypeStore } from '@/entities/club/store/useClubTypeStore';
import { FilterContainer } from '@/shared/ui';

function AllClubListHeader() {
  const [clubType, setClubType] = useState<string>('자율동아리리');
  const { setType } = useClubTypeStore();

  useEffect(() => {
    switch (clubType) {
      case '자율동아리':
        setType('AUTONOMOUS');
        break;
      case '전공동아리':
        setType('MAJOR');
        break;
      case '취업동아리':
        setType('CAREER');
        break;
      default:
        break;
    }
  }, [clubType]);

  return (
    <header className="w-full flex justify-between laptop:flex-col laptop:gap-4 laptop:justify-normal">
      <p className="text-title3B text-black laptop:text-body2B">동아리 목록</p>
      <FilterContainer
        options={['자율동아리', '전공동아리', '취업동아리']}
        onChange={value => setClubType(value)}
      />
    </header>
  );
}

export default AllClubListHeader;
