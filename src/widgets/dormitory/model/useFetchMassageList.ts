'use client';

import { useCallback, useState } from 'react';

import { MassageType } from '@/shared/types/dormitory';

import { getMassageList } from '../api/getMassageList';

export const useFetchMassageList = () => {
  const [massageList, setMassageList] = useState<MassageType[]>([]);

  const fetchMassageList = useCallback(async () => {
    const { reservations } = await getMassageList();

    setMassageList(reservations);
  }, []);

  return { massageList, fetchMassageList };
};
