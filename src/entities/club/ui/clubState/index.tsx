import React from 'react';

import { ApplyStatus } from '@/shared/types/club';

interface Props {
  recruiting?: boolean;
  status: ApplyStatus;
}

function ClubState({ recruiting, status }: Props) {
  return (
    <div
      className={`absolute w-fit rounded-lg px-5 py-2 laptop:px-4 laptop:py-[6px] flex z-30 ${!recruiting && !(status === 'PENDING') && 'hidden'} ${status === 'PENDING' ? 'bg-[#DCB800B8]' : 'bg-[#1EB916B8]'}`}
    >
      <p className="text-caption1B text-white laptop:text-caption2B">
        {status === 'PENDING' ? '대기' : '모집'}
      </p>
    </div>
  );
}

export default ClubState;
