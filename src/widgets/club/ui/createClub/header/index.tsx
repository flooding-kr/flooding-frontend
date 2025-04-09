import Link from 'next/link';
import React from 'react';

import { BigArrowLeft } from '@/shared/assets/icons';

function CreateCLubHeader() {
  return (
    <header className="flex justify-start">
      <div className="flex gap-10">
        <Link href="/club">
          <BigArrowLeft />
        </Link>
        <p className="text-title2M text-black">동아리 개설하기</p>
      </div>
    </header>
  );
}

export default CreateCLubHeader;
