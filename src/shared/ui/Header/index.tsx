import React from 'react';

import {
  HeaderAttendance,
  HeaderClub,
  HeaderDormitory,
  HeaderHomebase,
  HeaderManager,
  HeaderNotification,
  HeaderTotal,
} from '@/shared/assets/icons';
import { HeaderLogo } from '@/shared/assets/svg';
import Image from 'next/image';
import userProfileImage from '@/shared/assets/jpg/userProfileImage.jpg';

export default function Header() {
  return (
    <div className="flex justify-center w-full bg-main-600">
      <div className="flex flex-col w-full max-w-[1360px] my-6 gap-9 text-body1B text-gray-300">
        <div className="flex justify-between items-center  ">
          <HeaderLogo />
          <div className="flex items-center gap-10">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <HeaderManager isSelected={false} />
                <p>관리자</p>
              </div>
              <div className="flex items-center gap-2">
                <HeaderNotification isSelected={false} />
                <p>공지</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Image alt="profile" src={userProfileImage} className="w-8 h-8 rounded-full flex" />
              <p>김진원</p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 ">
          <div className="flex items-center gap-3">
            <HeaderTotal isSelected={false} />
            <p>전체</p>
          </div>
          <div className="flex items-center gap-3">
            <HeaderDormitory isSelected={false} />
            <p>기숙사</p>
          </div>
          <div className="flex items-center gap-3">
            <HeaderHomebase isSelected={false} />
            <p>홈베이스</p>
          </div>
          <div className="flex items-center gap-3">
            <HeaderClub isSelected={false} />
            <p>동아리</p>
          </div>
          <div className="flex items-center gap-3">
            <HeaderAttendance isSelected={false} />
            <p>출결</p>
          </div>
        </div>
      </div>
    </div>
  );
}
