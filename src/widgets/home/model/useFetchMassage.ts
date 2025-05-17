'use client';

import { useCallback, useState } from 'react';

import { DormitoryData } from '@/shared/types/home';

import { getMassage } from '../api/getMassage';

export const useFetchMassage = () => {
  const [massage, setMassage] = useState<DormitoryData>();

  const fetchMassage = useCallback(async () => {
    const data = await getMassage();
    setMassage(data);
  }, []);

  return { massage, fetchMassage };
};
