import React from 'react';

import { MealBoard, ProfileContainer, ScheduleBoard } from '@/entities/home';
import useUser from '@/shared/hooks/useUser';

export default function OverviewPanel() {
  const user = useUser();

  return (
    <div className=" max-w-[1360px] w-full flex flex-1 gap-4 justify-center mobile:flex-col mobile:items-center">
      <div className="w-full flex gap-4 tablet:flex-col">
        <ScheduleBoard />
        <MealBoard />
      </div>
      <ProfileContainer src="" stuName={user?.name} stuNum={user?.stuNum} />
    </div>
  );
}
