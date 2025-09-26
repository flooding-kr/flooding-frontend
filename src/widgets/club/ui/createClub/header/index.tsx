import Link from 'next/link';
import React from 'react';

import { BigArrowLeft } from '@/shared/assets/icons';

function CreateCLubHeader() {
  return (
    <header className="flex justify-start">
      <div className="flex gap-10">
        <Link href="/club" className="w-10 h-10 mobile:w-6 mobile:h-6">
          <BigArrowLeft />
        </Link>
        <p className="text-title2M text-black">동아리 개설하기</p>
      </div>
    </header>
  );
}

export default CreateCLubHeader;
