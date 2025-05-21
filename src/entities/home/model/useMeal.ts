import { useQuery } from '@tanstack/react-query';

import { getMeal } from '../api/getMeal';

interface Props {
  currentDate: string;
  dailyMeal: number;
}

export const useMeal = ({ currentDate, dailyMeal }: Props) => {
  const time = ['BREAKFAST', 'LUNCH', 'DINNER'];

  const { data: meal } = useQuery({
    queryKey: ['meal', currentDate, time[dailyMeal]],
    queryFn: () => getMeal({ date: currentDate, time: time[dailyMeal] }),
  });

  return { meal };
};
