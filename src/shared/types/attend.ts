import { Image } from './image';

export type AttendType = 'PRESENT' | 'ABSENT' | 'UNMARKED';

export interface StudentAttend {
  id: string;
  status?: AttendType;
  grade: number;
  classroom: number;
  number: number;
  name: string;
  profile_image: Image;
}
