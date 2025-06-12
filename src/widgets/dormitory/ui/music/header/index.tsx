'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import BorderDropdown from '@/entities/dormitory/ui/BorderDropdown';
import { BigArrowRight, Error, Music } from '@/shared/assets/icons';
import { OrderType } from '@/shared/types/music';
import Portal from '@/shared/ui/Portal';
import { useMusicTypeStore } from '@/widgets/dormitory/store/useMusicTypeStore';

import MusicNotifyModal from '../notify';

interface Props {
  page?: boolean;
}

function MusicHeader({ page }: Props) {
  const [selected, setSelected] = useState<string>('좋아요 순');
  const [modal, setModal] = useState(false);
  const { setType } = useMusicTypeStore();

  useEffect(() => {
    let type;
    if (selected === '최신순') {
      type = 'LATEST';
    } else if (selected === '좋아요 순') {
      type = 'LIKES';
    }
    setType(type as OrderType);
  }, [selected]);

  return (
    <header className="flex flex-1 justify-between items-center w-full">
      <div className="flex items-center gap-6 mobile:gap-2">
        <div className="w-10 h-10 mobile:h-6 mobile:w-6">
          <Music />
        </div>
        <p className="text-title3B text-black mobile:text-body2B">기상음악 신청</p>
        {!page && (
          <Link href="/dormitory/music" className="w-6 h-6 mobile:hidden">
            <BigArrowRight color="#121212" />
          </Link>
        )}
      </div>
      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={() => setModal(true)}
          className="flex items-center gap-2 mobile:hidden"
        >
          <div className="w-6 h-6">
            <Error color="#A7A7A7" />
          </div>
          <p className="text-gray-500 text-body2R">공지사항</p>
        </button>
        {modal && (
          <Portal onClose={() => setModal(false)}>
            <MusicNotifyModal onClose={() => setModal(false)} />
          </Portal>
        )}
        <BorderDropdown
          items={['최신순', '좋아요 순']}
          onChange={setSelected}
          value={selected}
          text={selected}
        />
      </div>
    </header>
  );
}

export default MusicHeader;
