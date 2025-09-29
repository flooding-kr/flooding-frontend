import React, { useState } from 'react';

import useAttend from '@/entities/club/model/useAttend';
import useNonAttend from '@/entities/club/model/useNonAttend';
import { Button, Tag } from '@/shared/ui';
import { useClubStore } from '@/widgets/Attendance/store/useClubStore';

export function AttendanceBoard() {
  const { id, period, setPeriod } = useClubStore();
  const weekArr = ['일', '월', '화', '수', '목', '금', '토'];
  const { mutate: attend } = useAttend();
  const { mutate: nonAttend } = useNonAttend();
  const today = new Date();
  const [date] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
    weekday: today.getDay(),
  });

  return (
    <section className="max-w-[474px] w-full max-h-[300px] px-9 py-6 bg-white rounded-lg flex flex-col gap-[22px]">
      <div className="flex flex-col gap-9">
        <div className="flex items-center gap-4 mobile:gap-3">
          <div className="text-body2R text-black mobile:text-caption1R">
            {date.year}.{String(date.month).padStart(2, '0')}.{String(date.day).padStart(2, '0')} (
            {weekArr[date.weekday]})
          </div>
        </div>
        <div className="w-full flex justify-between">
          {[8, 9, 10, 11].map(item => (
            <Tag
              key={item}
              text={`${item}교시`}
              onClick={() => setPeriod(item)}
              disabled={item === period}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Button text="출석" onClick={() => attend()} />
        <Button text="미출석" closed onClick={() => nonAttend()} />
      </div>
    </section>
  );
}
