import { Image } from './image';

export interface MassageType {
  id: string;
  student_number?: string;
  name: string;
  profile_image: Image;
  school_number?: string;
  is_present?: boolean;
}
