import { useState, useCallback } from 'react';

import { Meal } from '@/shared/types/meal';

import { getMeal } from '../api/getMeal';

export const useMeal = () => {
  const [meal, setMeal] = useState<Meal | null>(null);

  const fetchMeal = useCallback(async (date: string, mealTime: number) => {
    const time = ['BREAKFAST', 'LUNCH', 'DINNER'];
    const mealTimeName = time[mealTime];
    const data = await getMeal({ date, time: mealTimeName });
    setMeal(data);
  }, []);

  return { meal, fetchMeal };
};
