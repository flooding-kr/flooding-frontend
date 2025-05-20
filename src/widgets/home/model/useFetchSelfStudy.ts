'use client';

import { useCallback, useState } from 'react';

import { DormitoryData } from '@/shared/types/home';

import { getSelfStudy } from '../api/getSelfStudy';
import { useSelfStudyStore } from '../store/useSelfStudyStore';

export const useFetchSelfStudy = () => {
  const { selfStudy, setSelfStudy } = useSelfStudyStore();

  const fetchSelfStudy = useCallback(async () => {
    const { data } = await getSelfStudy();
    setSelfStudy(data);
  }, []);

  return { selfStudy, fetchSelfStudy };
};
