import Link from 'next/link';

import { BigArrowRight, HomebaseIcon } from '@/shared/assets/icons';
import { DormitoryPanel, OverviewPanel } from '@/widgets/home';
import { HomeBasePageWrapper } from '@/widgets/homebase';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-12 pt-12 pb-20 mobile:gap-6 mobile:p-4">
      <OverviewPanel />
      <DormitoryPanel />
      <div className="w-full flex justify-center mobile:hidden">
        <HomeBasePageWrapper />
      </div>
      <div className="hidden w-full mobile:flex justify-between items-center ">
        <div className="flex place-items-center gap-5 mobile:gap-2">
          <div>
            <HomebaseIcon mobile />
          </div>
          <p className="text-body2B text-black">홈베이스</p>
        </div>
        <Link href="/homebase" className="flex items-center gap-5 mobile:gap-2">
          <p className="text-gray-600 text-body3R">더보기</p>
          <BigArrowRight isMobile />
        </Link>
      </div>
    </div>
  );
}
