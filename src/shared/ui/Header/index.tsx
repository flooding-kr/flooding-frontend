'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import {
  HeaderAttendance,
  HeaderClub,
  HeaderDormitory,
  HeaderHomebase,
  HeaderManager,
  HeaderNotification,
} from '@/shared/assets/icons';
import userProfileImage from '@/shared/assets/jpg/userProfileImage.jpg';
import { HeaderLogo } from '@/shared/assets/svg';
import useUser from '@/shared/hooks/useUser';

import Portal from '../Portal';
import SideBar from '../SideBar';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const userData = useUser();

  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [sideBar, setSideBar] = useState(false);
  const currentPathname = pathname.split('/')[1];

  const headerActions = [
    { icon: HeaderManager, label: '관리자', path: 'manager' },
    { icon: HeaderNotification, label: '공지', path: 'notifications' },
  ];

  const menuItems = [
    { icon: HeaderDormitory, label: '기숙사', path: 'dormitory' },
    { icon: HeaderHomebase, label: '홈베이스', path: 'homebase' },
    { icon: HeaderClub, label: '동아리', path: 'club' },
    { icon: HeaderAttendance, label: '출결', path: 'attendance' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setSideBar(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="sticky top-0 flex justify-center w-full bg-main-600 z-50 mobile:z-[999] tablet:px-4 mobile:p-0">
      {/* Pc */}
      <div className="flex flex-col w-full max-w-[1360px] my-6 gap-7 text-body2B text-gray-300 tablet:text-body2B mobile:hidden">
        <div className="flex justify-between items-center">
          <Link href="/">
            <HeaderLogo />
          </Link>
          <div className="flex items-center gap-10">
            <div className="flex gap-6">
              {headerActions.map(({ icon: Icon, label, path }) => (
                <button
                  key={path}
                  type="button"
                  className={`flex items-center gap-2 ${label === '관리자' && !userData?.roles?.includes('ROLE_TEACHER') && 'hidden'}`}
                  onClick={() => router.push(`/${path}`)}
                  onMouseEnter={() => setHoverItem(path)}
                  onMouseLeave={() => setHoverItem(null)}
                  aria-label={label}
                >
                  <Icon isSelected={currentPathname === path || hoverItem === path} />
                  <p
                    className={
                      currentPathname === path || hoverItem === path
                        ? 'text-white'
                        : 'hover:text-white'
                    }
                  >
                    {label}
                  </p>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Image alt="profile" src={userProfileImage} className="w-7 h-7 rounded-full" />
              <button
                type="button"
                onClick={() => router.push('/mypage')}
                className={currentPathname === 'mypage' ? 'text-white' : 'hover:text-white'}
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
              onClick={() => router.push(`/${path}`)}
              onMouseEnter={() => setHoverItem(path)}
              onMouseLeave={() => setHoverItem(null)}
              aria-label={label}
            >
              <Icon isSelected={currentPathname === path || hoverItem === path} />
              <p
                className={
                  currentPathname === path || hoverItem === path ? 'text-white' : 'hover:text-white'
                }
              >
                {label}
              </p>
            </button>
          ))}
        </div>
      </div>
      {/* 모바일 */}
      <div className="hidden mobile:flex w-full z-[999]">
        <div className="flex w-full px-4 py-[22px] gap-9 justify-between fixed top-0 bg-main-600">
          <HeaderLogo />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSideBar(!sideBar)}
              className="h-[18px] flex flex-col justify-between items-center z-50 relative"
              aria-label="메뉴 열기"
            >
              <span
                className={`w-[27px] h-[2px] bg-white rounded-full transform transition duration-300 ease-in-out ${
                  sideBar ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`w-[27px] h-[2px] bg-white rounded-full transition-opacity duration-300 ease-in-out ${
                  sideBar ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-[27px] h-[2px] bg-white rounded-full transform transition duration-300 ease-in-out ${
                  sideBar ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
            {sideBar && (
              <Portal onClose={() => setSideBar(false)} sidebar>
                <SideBar />
              </Portal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
