/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Meal } from '@/shared/types/meal';

interface Props {
  currentDate: string;
  MMEAL_SC_CODE: number;
}

export const getMeal = ({ currentDate, MMEAL_SC_CODE }: Props) => {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const { data } = await axios.get(`neis/meal/${currentDate}/${MMEAL_SC_CODE}`);
        setMeal(data.mealServiceDietInfo?.[1]?.row?.[0]);
      } catch (err) {
        setMeal(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, []);

  return { meal, loading };
};
