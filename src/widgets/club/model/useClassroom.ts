'use client';

import { useCallback, useState } from 'react';

import { ClassroomType } from '@/shared/types/classroom';

import { getClassroom } from '../api/getClassroom';

interface Props {
  building: string;
  floor: number | null;
}

export const useClassroom = ({ building, floor }: Props) => {
  const [classroom, setClassroom] = useState<ClassroomType[]>([]);

  const fetchClassroom = useCallback(async () => {
    if (!floor) return;
    const { data } = await getClassroom({ building, floor });
    setClassroom(data.classrooms);
  }, [building, floor]);

  return { classroom, fetchClassroom };
};
