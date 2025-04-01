import Link from 'next/link';
import { useState, useEffect } from 'react';

import { ApplyBoard } from '@/entities/home';
import { BigArrowRight, DormitoryIcon } from '@/shared/assets/icons';

function DormitoryPanel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full max-w-[1360px] flex flex-col gap-10 mobile:gap-4">
      <header className="flex justify-between items-center">
        <div className="flex gap-5 mobile:gap-2">
          <DormitoryIcon isMobile={isMobile} />
          <p className="text-title3B text-black mobile:text-body2B">기숙사</p>
        </div>
        <Link href="/dormitory" className="flex items-center gap-5 mobile:gap-2">
          <p className="text-body1B text-gray-600 mobile:text-body3R">더보기</p>
          <BigArrowRight isMobile={isMobile} />
        </Link>
      </header>
      <div className="flex flex-1 gap-6 mobile:flex-col mobile:gap-4">
        <ApplyBoard title="자습 신청" count={0} maxCount={50} activationTime="20:00" />
        <ApplyBoard title="안마의자 신청" count={0} maxCount={5} activationTime="20:20" />
      </div>
    </div>
  );
}

export default DormitoryPanel;
