'use client';

import React from 'react';

import CheckAttend from '@/widgets/Attendance/ui/checkAttend';
import ClubAttend from '@/widgets/Attendance/ui/clubAttend';

function AttendWrapper() {
  return (
    <div className="max-w-[1360px] w-full flex flex-col gap-10">
      <ClubAttend />
      <CheckAttend />
    </div>
  );
}

export default AttendWrapper;
