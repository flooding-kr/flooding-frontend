'use client';

import { useCallback, useState } from 'react';

import { ClubListType } from '@/shared/types/club';

import { getMyClub } from '../api/getMyClub';

export const useMyClub = () => {
  const [myClub, setMyClub] = useState<ClubListType[]>([]);

  const fetchMyClub = useCallback(async () => {
    const data = await getMyClub();
    setMyClub(data.clubs);
  }, []);

  return { myClub, fetchMyClub };
};
