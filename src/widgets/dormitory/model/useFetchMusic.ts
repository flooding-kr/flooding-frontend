'use client';

import { useCallback } from 'react';

import { getMusic } from '../api/getMusic';
import { useMusicStore } from '../store/useMusicStore';

interface DataType {
  date: string;
  type: 'LATEST' | 'LIKES';
}
export const useFetchMusic = ({ date, type }: DataType) => {
  const { setMusic } = useMusicStore();

  const fetchMusic = useCallback(async () => {
    const data = await getMusic({ date, type });
    setMusic(data.music_list);
  }, [date, type]);

  return { fetchMusic };
};
