'use client';

import { useCallback, useState } from 'react';

import { MassageType } from '@/shared/types/dormitory';

import { getSelfStudyList } from '../api/getSelfStudyList';

export const useFetchSelfStudyList = () => {
  const [selfStudy, setSelfStudy] = useState<MassageType[]>([]);

  const fetchSelfStudy = useCallback(async () => {
    const { reservations } = await getSelfStudyList();

    setSelfStudy(reservations);
  }, []);

  return { selfStudy, fetchSelfStudy };
};
