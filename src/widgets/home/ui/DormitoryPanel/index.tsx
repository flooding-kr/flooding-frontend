import Link from 'next/link';
import React from 'react';

import { ApplyBoard } from '@/entities/home';
import { BigArrowRight, DormitoryIcon } from '@/shared/assets/icons';

function DormitoryPanel() {
  return (
    <div className="w-full max-w-[1360px] flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <div className="flex gap-5">
          <DormitoryIcon />
          <p className="text-title3B text-black">기숙사</p>
        </div>
        <Link href="/dormitory" className="flex items-center gap-5">
          <p className="text-body1B text-gray-600">더보기</p>
          <BigArrowRight />
        </Link>
      </header>
      <div className="flex flex-1 gap-6">
        <ApplyBoard title="자습 신청" count={0} maxCount={50} activationTime="08:00" />
        <ApplyBoard title="안마의자 신청" count={0} maxCount={5} activationTime="08:20" />
      </div>
    </div>
  );
}

export default DormitoryPanel;
