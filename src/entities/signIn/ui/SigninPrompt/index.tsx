import Link from 'next/link';
import React from 'react';

import { VerticalLine } from '@/shared/assets/svg';

export default function SigninPrompt() {
  return (
    <div className="flex mt-[10px] items-center justify-between">
      <div className="flex gap-4 items-center mobile:gap-[10px]">
        <p className="text-caption1R text-gray-300 mobile:text-caption2M">
          아직 프러딩을 로그인 안 하셨나요?
        </p>
        <VerticalLine />
        <Link href="/signup" className="text-caption1B text-gray-500 mobile:text-caption2B">
          회원가입
        </Link>
      </div>
      <div>
        <Link href="/" className="text-caption1B text-main-400 mobile:text-caption2B">
          비밀번호 찾기
        </Link>
      </div>
    </div>
  );
}
