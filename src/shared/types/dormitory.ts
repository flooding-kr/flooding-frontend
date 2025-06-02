import { Image } from './image';

export interface ReservationType {
  reservations: DormitoryRankType[];
}

export interface DormitoryRankType {
  id: string;
  student_number?: string;
  name: string;
  profile_image: Image;
  school_number?: string;
  is_present?: boolean;
}
