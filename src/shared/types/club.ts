export type ApplyStatus = 'PENDING' | 'RECRUITING' | 'NONE';
export type ClubType = 'AUTONOMOUS' | 'MAJOR' | 'CAREER';
export type BuildingType = 'DORMITORY' | 'MAIN_BUILDING' | 'AUDITORIUM';

export interface ClubListType {
  id: string;
  name: string;
  thumbnail_image_url: string;
  is_leader: boolean;
  is_recruiting: boolean;
  type: ClubType;
}

export interface StudentInfo {
  year: number;
  classroom: number;
  number: number;
}

export interface Member {
  id: string;
  name: string;
  student_info: StudentInfo;
}

export interface Classroom {
  id: number;
  floor: number;
  name: string;
  building_type: BuildingType;
}

export interface ClubDetail {
  id: string;
  name: string;
  description: string;
  classroom: Classroom;
  activity_image_urls: string[];
  thumbnail_image_url: string;
  type: ClubType;
  is_recruiting: boolean;
  club_members: Member[];
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | string;
  leader: Member;
  teacher: Member;
  applicant_count: number;
}
