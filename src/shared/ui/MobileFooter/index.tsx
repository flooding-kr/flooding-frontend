'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import {
  FooterHome,
  HeaderAttendance,
  HeaderClub,
  HeaderDormitory,
  HeaderHomebase,
} from '@/shared/assets/icons';

export default function MobileFooter() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { icon: FooterHome, label: '홈', path: '/' },
    { icon: HeaderDormitory, label: '기숙사', path: '/dormitory' },
    { icon: HeaderHomebase, label: '홈베이스', path: '/homebase' },
    { icon: HeaderClub, label: '동아리', path: '/club' },
    { icon: HeaderAttendance, label: '출결', path: '/attendance' },
  ];

  return (
    <div className="hidden mobile:block w-full ">
      <div className="flex flex-col w-full max-w-[1360px] gap-9 text-caption2B text-gray-300 z-50 fixed bottom-0 bg-white">
        <div className="flex justify-around px-4 py-2">
          {menuItems.map(({ icon: Icon, label, path }) => (
            <button
              type="button"
              key={path}
              className="flex flex-col items-center gap-1"
              onClick={() => router.push(path)}
              aria-label={label}
            >
              <Icon isSelected={pathname === path} mobile />
              <p className={pathname === path ? 'text-main-600' : ''}>{label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
