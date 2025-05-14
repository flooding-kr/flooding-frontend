'use client';

import React from 'react';

import { Massage } from '@/shared/assets/icons';

function MassageHeader() {
  return (
    <header className="flex items-center w-full">
      <div className="flex items-center gap-6 mobile:gap-2">
        <div className="w-10 h-10 mobile:w-6 mobile:h-6">
          <Massage />
        </div>
        <p className="text-title3B text-black mobile:text-body2B">안마의자 신청</p>
      </div>
    </header>
  );
}

export default MassageHeader;
