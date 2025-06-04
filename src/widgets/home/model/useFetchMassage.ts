'use client';

import { useQuery } from '@tanstack/react-query';

import { DormitoryData } from '@/shared/types/home';

import { getMassage } from '../api/getMassage';

export const useFetchMassage = () => {
  const { data: massage } = useQuery<DormitoryData>({
    queryKey: ['massage'],
    queryFn: () => getMassage(),
  });

  return massage;
};
