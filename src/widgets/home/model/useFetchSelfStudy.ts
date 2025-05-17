'use client';

import { useCallback, useState } from 'react';

import { DormitoryData } from '@/shared/types/home';

import { getSelfStudy } from '../api/getSelfStudy';

export const useFetchSelfStudy = () => {
  const [selfStudy, setSelfStudy] = useState<DormitoryData>();

  const fetchSelfStudy = useCallback(async () => {
    const { data } = await getSelfStudy();
    setSelfStudy(data);
  }, []);

  return { selfStudy, fetchSelfStudy };
};
