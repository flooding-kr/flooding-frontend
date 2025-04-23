import axios from 'axios';

import { ClubType } from '@/shared/types/types/clubListType';

interface Props {
  type: ClubType;
}

export const getClubList = async ({ type }: Props) => {
  const { data } = await axios.get(`/api/club/clublist?type=${type}`);
  return data.clubs;
};
