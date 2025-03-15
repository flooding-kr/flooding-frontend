import React from 'react';

import { HomebaseIcon, InfoCircle } from '@/shared/assets/icons';

export default function SectionTitle() {
  return (
    <div className="flex place-items-center gap-5 my-4">
      <div>
        <HomebaseIcon />
      </div>
      <p className="text-title3B">홈베이스</p>
      <div className="hidden homebaseResponsive:block">
        <div className=" w-full max-w-[439px] flex justify-end items-center gap-2 ">
          <InfoCircle />
          <p className="text-body3R text-gray-500">층, 교시 1개만 선택 가능</p>
        </div>
      </div>
    </div>
  );
}
