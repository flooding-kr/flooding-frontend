import React from 'react';

import { MypageHomebaseContainer, MypageProfileContainer } from '@/entities/mypage';

export default function MypageContainer() {
  return (
    <div className="w-full max-w-[1360px] flex flex-col gap-[60px] items-center  justify-center mobile:flex-col mobile:items-center">
      <MypageProfileContainer />
      <MypageHomebaseContainer />
    </div>
  );
}
