import React from 'react';

import { MealBoard, ProfileContainer, ScheduleBoard } from '@/entities/home';

export default function OverviewPanel() {
  return (
    <div className="w-full flex flex-1 gap-4 justify-center mobile:flex-col mobile:items-center">
      <ScheduleBoard />
      <MealBoard />
      <ProfileContainer src="" stuName="민우석" stuNum="3308" />
    </div>
  );
}
