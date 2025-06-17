import Link from 'next/link';
import React from 'react';

import { Write } from '@/shared/assets/icons';

function WriteButton() {
  return (
    <Link
      href="/notifications/write"
      className="bg-main-600 rounded-full w-[100px] h-[100px] flex justify-center items-center"
    >
      <Write />
      <p className="text-white text-body3B">글쓰기</p>
    </Link>
  );
}

export default WriteButton;
