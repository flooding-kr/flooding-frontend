import React, { useEffect } from 'react';

import { ArrowLeft, ArrowRight, Error } from '@/shared/assets/icons';
import { VerticalLine } from '@/shared/assets/svg';

import { useDateState } from '../../model/useDateState';
import { useSchedule } from '../../model/useSchedule';

export default function ScheduleBoard() {
  const { date, handleDateChange } = useDateState();
  const { schedule, fetchSchedule } = useSchedule();
  const weekArr = ['일', '월', '화', '수', '목', '금', '토'];

  const currentDate = `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`;

  useEffect(() => {
    fetchSchedule(currentDate);
  }, [currentDate, fetchSchedule]);

  return (
    <section className="bg-white rounded-lg px-7 py-6 max-w-[484px] h-[420px] w-full flex flex-col mobile:max-h-[286px] mobile:p-3 tablet:max-w-full">
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex flex-col gap-6 flex-1 mobile:gap-3">
          <header className="flex justify-between">
            <p className="text-body1B text-black mobile:text-body3B">시간표</p>
            <div className="flex items-center gap-4 mobile:gap-3">
              <button
                type="button"
                className="flex justify-center items-center"
                onClick={() => handleDateChange(-1)}
                aria-label="before button"
              >
                <ArrowLeft color="#121212" />
              </button>
              <div className="text-body2R text-black mobile:text-caption1R">
                {date.year}.{String(date.month).padStart(2, '0')}.
                {String(date.day).padStart(2, '0')} ({weekArr[date.weekday]})
              </div>
              <button
                type="button"
                className="flex justify-center items-center"
                onClick={() => handleDateChange(1)}
                aria-label="next button"
              >
                <ArrowRight color="#121212" />
              </button>
            </div>
          </header>
          <div className="flex flex-1 rounded-lg p-5 bg-gray-100 mobile:px-3 mobile:py-2">
            {schedule ? (
              <div className="w-full flex flex-col flex-1 gap-4 mobile:gap-3">
                {schedule.map((item, idx) => (
                  <div
                    key={`${currentDate}-${item}-${weekArr[idx]}`}
                    className="w-full flex items-center text-body3R gap-4 mobile:gap-3 mobile:text-caption1R"
                  >
                    <span className="text-gray-500 text-caption2M">{idx + 1}교시</span>{' '}
                    <VerticalLine />{' '}
                    <span
                      className="w-full flex-1"
                      style={{
                        display: 'block',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        wordBreak: 'break-word',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col justify-center items-center gap-4">
                  <Error color="#A7A7A7" />
                  <p className="text-body2R text-gray-500">오늘은 수업이 없습니다.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
