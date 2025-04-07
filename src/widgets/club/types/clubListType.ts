export type ApplyStatus = 'PENDING' | 'RECRUITING' | 'NONE';
export type ClubType = 'AUTONOMOUS' | 'MAJOR' | 'CAREER';

export interface ClubListType {
  id: string;
  name: string;
  thumbnailImageUrl: string;
  isLeader: true;
  status: ApplyStatus;
  type: ClubType;
}
