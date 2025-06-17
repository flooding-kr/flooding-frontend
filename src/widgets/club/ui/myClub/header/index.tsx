import React from 'react';

import CreateClubButton from '@/entities/club/ui/createClubButton';

function MyClubHeader() {
  return (
    <header className="w-full flex justify-between items-center">
      <p className="text-title3B text-black laptop:text-body2B">내 동아리</p>
      <CreateClubButton />
    </header>
  );
}

export default MyClubHeader;
