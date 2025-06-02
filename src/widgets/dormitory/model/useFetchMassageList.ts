'use client';

import { useQuery } from '@tanstack/react-query';

import { ReservationType } from '@/shared/types/dormitory';

import { getMassageList } from '../api/getMassageList';

export const useFetchMassageList = () => {
  const { data: massageList } = useQuery<ReservationType>({
    queryKey: ['massageRank'],
    queryFn: () => getMassageList(),
  });

  return { massageList };
};
