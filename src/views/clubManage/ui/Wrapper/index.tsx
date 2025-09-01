import Link from 'next/link';
import React from 'react';

import { BigArrowLeft } from '@/shared/assets/icons';
import ClubApplicant from '@/widgets/club/ui/clubManage/applicantList';
import ClubAttend from '@/widgets/club/ui/clubManage/attend';

function ClubManageWrapper() {
  return (
    <div className="max-w-[1360px] w-full flex flex-col gap-12 pt-14 pb-24">
      <header className="flex justify-start">
        <div className="flex gap-10">
          <Link href="/club" className="w-10 h-10 mobile:w-6 mobile:h-6">
            <BigArrowLeft />
          </Link>
          <p className="text-title2M text-black">동아리 관리자</p>
        </div>
      </header>
      <div className="flex flex-col gap-10">
        <ClubAttend />
        <ClubApplicant />
      </div>
    </div>
  );
}

export default ClubManageWrapper;
