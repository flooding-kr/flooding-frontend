'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
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
import userProfileImage from '@/shared/assets/jpg/userProfileImage.jpg';
import { HeaderLogo } from '@/shared/assets/svg';
import useUser from '@/shared/hooks/useUser';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const userData = useUser();

  const headerActions = [
    { icon: HeaderManager, label: '관리자', path: '/manager' },
    { icon: HeaderNotification, label: '공지', path: '/notifications' },
  ];

  const menuItems = [
    { icon: HeaderTotal, label: '전체', path: '/' },
    { icon: HeaderDormitory, label: '기숙사', path: '/dormitory' },
    { icon: HeaderHomebase, label: '홈베이스', path: '/homebase' },
    { icon: HeaderClub, label: '동아리', path: '/club' },
    { icon: HeaderAttendance, label: '출결', path: '/attendance' },
  ];

  return (
    <div className="flex justify-center w-full bg-main-600">
      {/* Pc */}
      <div className="flex flex-col w-full max-w-[1360px] my-6 gap-9 text-body1B text-gray-300 mobile:hidden">
        <div className="flex justify-between items-center ">
          <HeaderLogo />
          <div className="flex items-center gap-10">
            <div className="flex gap-6">
              {headerActions.map(({ icon: Icon, label, path }) => (
                <button
                  key={path}
                  type="button"
                  className="flex items-center gap-2"
                  onClick={() => router.push(path)}
                  aria-label={label}
                >
                  <Icon isSelected={pathname === path} />
                  <p className={pathname === path ? 'text-white' : ''}>{label}</p>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-5">
              <Image alt="profile" src={userProfileImage} className="w-8 h-8 rounded-full" />
              <button
                type="button"
                onClick={() => router.push('/profile')}
                className={pathname === '/profile' ? 'text-white' : ''}
                aria-label="프로필"
              >
                {userData?.name}
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          {menuItems.map(({ icon: Icon, label, path }) => (
            <button
              type="button"
              key={path}
              className="flex items-center gap-3"
              onClick={() => router.push(path)}
              aria-label={label}
            >
              <Icon isSelected={pathname === path} />
              <p className={pathname === path ? 'text-white' : ''}>{label}</p>
            </button>
          ))}
        </div>
      </div>
      {/* 모바일 */}
      <div className="hidden mobile:block w-full ">
        <div className="flex w-full px-4 py-[22px] gap-9 justify-between fixed top-0 bg-main-600">
          <HeaderLogo />
          <div className="flex gap-3">
            <button type="button" onClick={() => router.push('/notifications')} aria-label="공지">
              <HeaderNotification isSelected={pathname === '/notifications'} mobile />
            </button>
            <button type="button" onClick={() => router.push('/profile')} aria-label="프로필">
              <Image
                alt="profile"
                src={userProfileImage}
                className="w-[38px] h-[38px] rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
