import React from 'react';

import { AllClub, MyClub } from '@/widgets/club';

function ClubWrapper() {
  return (
    <div className="max-w-[1360px] w-full flex flex-col gap-[60px]">
      <MyClub />
      <AllClub />
    </div>
  );
}

export default ClubWrapper;
