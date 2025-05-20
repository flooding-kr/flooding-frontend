import React from 'react';

import { MealBoard, ProfileContainer, ScheduleBoard } from '@/entities/home';
import useUser from '@/shared/hooks/useUser';

export default function OverviewPanel() {
  const user = useUser();

  return (
    <div className="w-full flex gap-4 justify-center items-center tablet:flex-col tablet:items-start tablet:gap-4">
      <div className="w-full tablet:flex-1">
        <ScheduleBoard />
      </div>
      <div className="w-full tablet:flex-1">
        <MealBoard />
      </div>
      <div className="tablet:hidden w-full">
        <ProfileContainer src="" stuName={user?.name} stuNum={user?.stuNum} />
      </div>
    </div>
  );
}
