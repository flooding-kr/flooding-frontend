'use client';

import { useCallback, useState } from 'react';

import { MassageType } from '@/shared/types/dormitory';

import { getMassageList } from '../api/getMassageList';

export const useFetchMassageList = () => {
  const [massage, setMassage] = useState<MassageType[]>([]);

  const fetchMassage = useCallback(async () => {
    const { reservations } = await getMassageList();

    setMassage(reservations);
  }, []);

  return { massage, fetchMassage };
};
