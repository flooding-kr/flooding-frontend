'use client';

import { useCallback, useState } from 'react';

import { ClubListType } from '@/shared/types/club';

import { getClubList } from '../api/getClubList';
import { useClubTypeStore } from '../store/useClubTypeStore';

export const useClubList = () => {
  const [clublist, setClubList] = useState<ClubListType[]>([]);
  const { type } = useClubTypeStore();

  const fetchClubList = useCallback(async () => {
    const data = await getClubList({ type });
    setClubList(data);
  }, [type]);

  return { clublist, fetchClubList };
};
