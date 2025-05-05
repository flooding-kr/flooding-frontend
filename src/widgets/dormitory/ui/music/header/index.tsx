'use client';

import React, { useState } from 'react';

import BorderDropdown from '@/entities/dormitory/ui/BorderDropdown';
import { Error, Music } from '@/shared/assets/icons';

function MusicHeader() {
  const [selected, setSelected] = useState<string>('최신순');

  return (
    <header className="flex flex-1 justify-between items-center w-full">
      <div className="flex items-center gap-6">
        <Music size={40} />
        <p className="text-title3B text-black">기상음악 신청</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Error width={24} height={24} color="#A7A7A7" />
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
