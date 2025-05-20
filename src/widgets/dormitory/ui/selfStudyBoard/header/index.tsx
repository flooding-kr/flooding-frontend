'use client';

import React, { useState } from 'react';

import { Book } from '@/shared/assets/icons';
import FilterButton from '@/shared/ui/FilterButton';
import FilterModal from '@/shared/ui/FilterModal';
import Portal from '@/shared/ui/Portal';

function SelfStudyHeader() {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <header className="flex flex-1 justify-between items-center w-full">
      <div className="flex items-center gap-6 mobile:gap-2">
        <div className="w-10 mobile:w-6">
          <Book />
        </div>
        <p className="text-title3B text-black mobile:text-body2B">자습 신청</p>
      </div>
      {/* <FilterButton onClick={() => setSelected(true)} select={selected} />
      {selected && (
        <Portal onClose={() => setSelected(false)}>
          <FilterModal
            list={['기숙사', '홈베이스', '동아리', '전체']}
            onClick={() => setSelected(false)}
          />
        </Portal>
      )} */}
    </header>
  );
}

export default SelfStudyHeader;
