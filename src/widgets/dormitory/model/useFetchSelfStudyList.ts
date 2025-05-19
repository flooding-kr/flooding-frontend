'use client';

import { useCallback, useState } from 'react';

import { MassageType } from '@/shared/types/dormitory';

import { getSelfStudyList } from '../api/getSelfStudyList';

export const useFetchSelfStudyList = () => {
  const [selfStudyList, setSelfStudyList] = useState<MassageType[]>([]);

  const fetchSelfStudyList = useCallback(async () => {
    const { reservations } = await getSelfStudyList();

    setSelfStudyList(reservations);
  }, []);

  return { selfStudyList, fetchSelfStudyList };
};
