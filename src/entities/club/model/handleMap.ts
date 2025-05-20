import {
  AuditoriumMap1,
  AuditoriumMap2,
  AuditoriumMap3,
  AuditoriumMap4,
  DormitoryMap1,
  DormitoryMap2,
  MainMap1,
  MainMap2,
  MainMap3,
  MainMap4,
} from '@/shared/assets/png';
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
