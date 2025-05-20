'use client';

import { useCallback, useState } from 'react';

import { DormitoryData } from '@/shared/types/home';

import { getMassage } from '../api/getMassage';
import { useMassageStore } from '../store/useMassageStore';

export const useFetchMassage = () => {
  const { massage, setMassage } = useMassageStore();

  const fetchMassage = useCallback(async () => {
    const data = await getMassage();
    setMassage(data);
  }, []);

  return { massage, fetchMassage };
};
