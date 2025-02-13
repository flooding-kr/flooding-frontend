import { HeaderLogo } from '@/shared/assets/svg';
import React from 'react';

export default function Header() {
  return (
    <div className="flex justify-center w-full bg-main-600">
      <div className="flex flex-col w-full max-w-[1360px] my-6 gap-9">
        <div className="flex justify-between">
          <HeaderLogo />
          <div className="flex gap-10">
            <div className="flex gap-6">
              <p>로고</p>
              <p>로고</p>
            </div>
            <p>로고</p>
          </div>
        </div>
        <div className="flex gap-10">
          <p>로고</p>
          <p>로고</p>
          <p>로고</p>
          <p>로고</p>
          <p>로고</p>
        </div>
      </div>
    </div>
  );
}
