export type ApplyStatus = 'PENDING' | 'RECRUITING' | 'NONE';
export type ClubType = 'AUTONOMOUS' | 'MAJOR' | 'CAREER';

export interface ClubListType {
  id: string;
  name: string;
  thumbnail_image_url: string;
  is_leader: boolean;
  is_recruiting: boolean;
  type: ClubType;
}
