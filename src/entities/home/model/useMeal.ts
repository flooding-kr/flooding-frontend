import { useState, useCallback } from 'react';

import useUser from '@/shared/hooks/useUser';
import { Meal } from '@/shared/types/meal';

import { getMeal } from '../api/getMeal';

export const useMeal = () => {
  const [meal, setMeal] = useState<Meal | null>(null);
  const user = useUser();
  const classroom = user?.student_info.classroom;
  const grade = user?.student_info.grade;
  const fetchMeal = useCallback(
    async (date: string, mealTime: number) => {
      const time = ['BREAKFAST', 'LUNCH', 'DINNER'];
      if (grade && classroom) {
        const mealTimeName = time[mealTime];
        const data = await getMeal({ date, time: mealTimeName });
        setMeal(data);
      }
    },
    [grade, classroom]
  );

  return { meal, fetchMeal };
};
