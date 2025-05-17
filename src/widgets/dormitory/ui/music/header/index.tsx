'use client';

import React, { useState } from 'react';

import BorderDropdown from '@/entities/dormitory/ui/BorderDropdown';
import { Error, Music } from '@/shared/assets/icons';

function MusicHeader() {
  const [selected, setSelected] = useState<string>('최신순');

  return (
    <header className="flex flex-1 justify-between items-center w-full">
      <div className="flex items-center gap-6 mobile:gap-2">
        <div className="w-10 h-10 mobile:h-6 mobile:w-6">
          <Music />
        </div>
        <p className="text-title3B text-black mobile:text-body2B">기상음악 신청</p>
      </div>
      <div className="flex items-center gap-6 mobile:hidden">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6">
            <Error color="#A7A7A7" />
          </div>
          <p className="text-gray-500 text-body2R">공지사항</p>
        </div>
        <BorderDropdown
          items={['최신순', '좋아요 순']}
          onChange={setSelected}
          value={selected}
          text="최신순"
        />
      </div>
    </header>
  );
}

export default MusicHeader;
