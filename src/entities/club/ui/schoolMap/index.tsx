import Image from 'next/image';

import { Map } from '@/shared/assets/icons';
import { BuildingType } from '@/shared/types/club';

import { handleMap } from '../../model';

const buildingMap = {
  AUDITORIUM: '금봉관',
  MAIN_BUILDING: '본관',
  DORMITORY: '동행관',
};

interface Props {
  floor: number;
  building: BuildingType;
  room: string;
  onClick?: () => void;
}

function SchoolMap({ building, floor, room, onClick }: Props) {
  return (
    <div className="relative w-full h-full flex justify-center items-end p-5">
      <Image
        alt={building + floor}
        src={handleMap({ building, floor })}
        fill
        className={`rounded-lg ${onClick ? 'object-contain' : ''} bg-white`}
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
            <p className="text-body2R text-white">{room}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default SchoolMap;
