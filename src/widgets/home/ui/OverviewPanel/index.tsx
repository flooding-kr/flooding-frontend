import React from 'react';

import { MealBoard, ProfileContainer, ScheduleBoard } from '@/entities/home';
import useUser from '@/shared/hooks/useUser';

export default function OverviewPanel() {
  const user = useUser();

  return (
    <div className="w-full flex flex-1 gap-4 justify-center mobile:flex-col mobile:items-center">
      <ScheduleBoard />
      <MealBoard />
      <ProfileContainer src="" stuName={user?.name} stuNum={user?.stuNum} />
    </div>
  );
}
