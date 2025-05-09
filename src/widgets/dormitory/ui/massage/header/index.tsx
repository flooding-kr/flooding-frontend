'use client';

import React from 'react';

import { Massage } from '@/shared/assets/icons';

function MassageHeader() {
  return (
    <header className="flex items-center w-full">
      <div className="flex items-center gap-6">
        <Massage size={40} />
        <p className="text-title3B text-black">안마의자 신청</p>
      </div>
    </header>
  );
}

export default MassageHeader;
