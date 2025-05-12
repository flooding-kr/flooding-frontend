'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Admin, HeaderNotification } from '@/shared/assets/icons';
import userProfileImage from '@/shared/assets/jpg/userProfileImage.jpg';
import useUser from '@/shared/hooks/useUser';

function SideBar() {
  const user = useUser();

  return (
    <aside
      style={{ height: 'calc(100dvh - 98px)' }}
      className="bg-white w-[180px] p-6 flex flex-col gap-9 z-[999]"
    >
      <Link href="/mypage" className="relative flex items-center gap-4">
        <Image
          src={userProfileImage}
          alt="프로필"
          width={28}
          height={28}
          className="border border-solid border-gray-200 rounded-full"
        />
        <div className="flex items-center gap-2">
          <p className="text-caption1R text-gray-400">{user?.stuNum}</p>
          <p className="text-body3B text-black">{user?.name}</p>
        </div>
      </Link>
      <Link href="/notifications" className="flex items-center gap-4">
        <HeaderNotification size={28} />
        <p className="text-body3R text-gray-300">공지</p>
      </Link>
      <Link href="/manager" className="flex items-center gap-4">
        <Admin />
        <p className="text-body3R text-gray-300">관리자</p>
      </Link>
    </aside>
  );
}

export default SideBar;
