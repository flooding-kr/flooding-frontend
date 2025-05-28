'use client';

import { useQuery } from '@tanstack/react-query';

import { getMusic } from '../api/getMusic';

interface DataType {
  date: string;
  type: 'LATEST' | 'LIKES';
}
export const useFetchMusic = ({ date, type }: DataType) => {
  const { data: music } = useQuery({
    queryKey: ['music', date, type],
    queryFn: () => getMusic({ date, type }),
  });

  return music?.music_list;
};
