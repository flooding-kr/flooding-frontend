'use client';

import Massage from '@/widgets/dormitory/ui/massage';
import Music from '@/widgets/dormitory/ui/music';
import SelfStudy from '@/widgets/dormitory/ui/selfStudyBoard';

function DormitoryWrapper() {
  return (
    <div className="max-w-[1360px] w-full flex flex-col justify-center pt-[56px] pb-[92px] gap-20 laptop:px-4 laptop:pt-6 laptop:pb-[51px] mobile:pt-[21px] mobile:gap-10">
      <SelfStudy />
      <Massage />
      <Music />
    </div>
  );
}

export default DormitoryWrapper;
