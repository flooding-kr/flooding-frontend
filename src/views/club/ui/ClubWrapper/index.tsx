import React from 'react';

import { AllClub, MyClub } from '@/widgets/club';

function ClubWrapper() {
  return (
    <div className="max-w-[1360px] w-full flex flex-col gap-[60px] laptop:px-4 mobile:gap-9">
      <MyClub />
      <AllClub />
    </div>
  );
}

export default ClubWrapper;
