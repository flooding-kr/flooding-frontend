import { Image } from './image';

export interface MassageType {
  school_number: string;
  name: string;
  profile_image: Image;
}

export interface SelfStudyType {
  id: string;
  student: SelfStudyStudent;
}

export interface SelfStudyStudent {
  student_number: string;
  name: string;
  profile_image: Image;
}
