'use client';

import { useQuery } from '@tanstack/react-query';

import { ReservationType } from '@/shared/types/dormitory';

import { getMassageList } from '../api/getMassageList';

export const useFetchMassageList = () => {
  const { data: massageList } = useQuery<ReservationType>({
    queryKey: ['massageRank', 'massage'],
    queryFn: () => getMassageList(),
    staleTime: 0,
    gcTime: 0,
  });

  return { massageList };
};
