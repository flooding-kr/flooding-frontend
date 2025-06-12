'use client';

import { useQuery } from '@tanstack/react-query';

import { DormitoryData } from '@/shared/types/home';

import { getSelfStudy } from '../api/getSelfStudy';

export const useFetchSelfStudy = () => {
  const selfStudy = useQuery<DormitoryData>({
    queryKey: ['selfStudy'],
    queryFn: () => getSelfStudy(),
    staleTime: 0,
    gcTime: 0,
  });

  return selfStudy.data;
};
