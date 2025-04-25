import AuditoriumMap1 from '@/shared/assets/png/auditoriumMap-1.png';
import AuditoriumMap2 from '@/shared/assets/png/auditoriumMap-2.png';
import AuditoriumMap3 from '@/shared/assets/png/auditoriumMap-3.png';
import AuditoriumMap4 from '@/shared/assets/png/auditoriumMap-4.png';
import DormitoryMap1 from '@/shared/assets/png/dormitory-1.png';
import DormitoryMap2 from '@/shared/assets/png/dormitory-2.png';
import MainMap1 from '@/shared/assets/png/mainMap-1.png';
import MainMap2 from '@/shared/assets/png/mainMap-2.png';
import MainMap3 from '@/shared/assets/png/mainMap-3.png';
import MainMap4 from '@/shared/assets/png/mainMap-4.png';
import { BuildingType } from '@/shared/types/club';

interface Props {
  building: BuildingType;
  floor: number;
}

const mapData: Record<BuildingType, Record<number, string>> = {
  AUDITORIUM: {
    1: AuditoriumMap1.src,
    2: AuditoriumMap2.src,
    3: AuditoriumMap3.src,
    4: AuditoriumMap4.src,
  },
  MAIN_BUILDING: {
    1: MainMap1.src,
    2: MainMap2.src,
    3: MainMap3.src,
    4: MainMap4.src,
  },
  DORMITORY: {
    1: DormitoryMap1.src,
    2: DormitoryMap2.src,
  },
};

export const handleMap = ({ building, floor }: Props) => mapData[building]?.[floor];
