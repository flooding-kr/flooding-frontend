import React, { useEffect } from 'react';

import { useClubList } from '@/entities/club/model/useClubList';
import { useMyClub } from '@/entities/club/model/useMyClub';

import { AttendanceBoard } from './attendanceBoard';
import AttendClubList from './attendClubList';

function ClubAttend() {
  const { myClub, fetchMyClub } = useMyClub();

  useEffect(() => {
    fetchMyClub();
  }, []);

  return (
    <div className="w-full flex flex-col gap-[29px]">
      <p className="text-title3B text-black">동아리 출석</p>
      <div className="flex justify-between">
        <AttendClubList clubs={myClub} />
        <AttendanceBoard />
      </div>
    </div>
  );
}

export default ClubAttend;
