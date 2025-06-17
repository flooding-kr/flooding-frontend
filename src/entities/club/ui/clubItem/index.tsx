import Image from 'next/image';
import React from 'react';

import { ApplyStatus } from '@/shared/types/club';

import ClubState from '../clubState';

interface Props {
  name: string;
  image: string;
  recruiting: boolean;
  status: ApplyStatus;
}

function ClubItem({ image, name, recruiting, status }: Props) {
  return (
    <section className="max-w-[252px] h-[300px] w-full bg-white rounded-lg px-4 py-5 mobile:max-w-[144px] mobile:max-h-[180px] mobile:p-3 laptop:max-w-[182px] laptop:max-h-[212px] laptop:p-4">
      <div className="relative flex flex-col gap-4 laptop:gap-3">
        <ClubState recruiting={recruiting} status={status} />
        <div className="flex z-0 relative w-[220px] h-[220px] mobile:w-[120px] mobile:h-[120px] laptop:w-[150px] laptop:h-[150px]">
          <Image
            alt={name}
            src={image}
            fill
            className="flex z-0 border border-solid border-gray-200 rounded-lg object-contain"
          />
        </div>
        <p className="flex justify-center text-black text-body2B laptop:text-caption2B">{name}</p>
      </div>
    </section>
  );
}

export default ClubItem;
