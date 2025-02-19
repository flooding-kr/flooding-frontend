'use client';

import MealBoard from '@/widgets/home/ui/MealBoard';
import ScheduleBoard from '@/widgets/home/ui/ScheduleBoard';

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <MealBoard />
      <ScheduleBoard />
    </div>
  );
}
