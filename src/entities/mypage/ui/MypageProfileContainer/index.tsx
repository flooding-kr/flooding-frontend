'use client';

import React from 'react';

import { ProfileContainer } from '@/entities/home';
import useUser from '@/shared/hooks/useUser';

export default function MypageProfileContainer() {
  const user = useUser();
  return (
    <div className="w-full bg-white rounded-lg">
      <ProfileContainer src="" stuName={user?.name} stuNum={user?.stuNum} mypage />
    </div>
  );
}
