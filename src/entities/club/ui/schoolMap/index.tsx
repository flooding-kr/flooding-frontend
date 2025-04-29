import Image from 'next/image';
import React from 'react';

import { Map } from '@/shared/assets/icons';
import { BuildingType } from '@/shared/types/club';

import { handleMap } from '../../model';

interface Props {
  floor: number;
  building: BuildingType;
  onClick?: () => void;
}

function SchoolMap({ building, floor, onClick }: Props) {
  return (
    <div className="relative w-full h-full flex justify-center items-end p-5">
      <Image
        alt={building + floor}
        src={handleMap({ building, floor })}
        fill
        className={`rounded-lg ${onClick ? 'object-cover' : ''} bg-white`}
      />
      {onClick && (
        <>
          <button
            type="button"
            onClick={onClick}
            className="absolute top-[14px] right-5 bg-white border-[1px] border-solid border-gray-200 rounded-lg p-[10px]"
          >
            <Map />
          </button>
          <div className="bg-[#12121266] rounded-lg px-5 py-4 z-30">
            <p className="text-body2R text-white">
              {building} {floor}층에 위치함
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default SchoolMap;
