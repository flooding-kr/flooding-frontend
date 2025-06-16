'use client';

import { useQuery } from '@tanstack/react-query';

import { ReservationType } from '@/shared/types/dormitory';

import { getSelfStudyList } from '../api/getSelfStudyList';

export const useFetchSelfStudyList = () => {
  const { data: selfStudyList } = useQuery<ReservationType>({
    queryKey: ['selfStudyRank'],
    queryFn: () => getSelfStudyList(),
    staleTime: 0,
    gcTime: 0,
  });

  return { selfStudyList };
};
