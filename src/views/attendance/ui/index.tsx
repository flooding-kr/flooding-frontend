'use client';

import { useState } from 'react';

import { useDateState } from '@/entities/home/model/useDateState';
import { ArrowLeft, ArrowRight } from '@/shared/assets/icons';
import { SearchInput, Tag } from '@/shared/ui';
import FilterButton from '@/shared/ui/FilterButton';
import GrayBorderButton from '@/shared/ui/GrayBorderButton';

function Attendance() {
  const { date, handleDateChange } = useDateState();
  const [filter, setFilter] = useState<boolean>(false);
  const weekArr = ['일', '월', '화', '수', '목', '금', '토'];

  const currentDate = `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`;
  return (
    <div className="flex justify-center pt-14 px-4">
      <div className="max-w-[1360px] w-full flex flex-col gap-6">
        <header className="flex justify-between items-center">
          <p className="text-title3B text-black">출석 현황</p>
          <div className="flex items-center gap-9">
            <GrayBorderButton text="교실 인원" counter={10} disabled />
            <GrayBorderButton text="홈베 인원" counter={5} />
            <GrayBorderButton text="타실 인원" counter={2} />
            <Tag text="Excel 내보내기" icon={<ArrowRight color="#5E7EF3" />} />
          </div>
        </header>
        <section className="flex items-center gap-10">
          <SearchInput placeholder="검색할 학생을 입력해주세요." className="bg-white" />
          <div className="w-[200px] flex items-center justify-between mobile:justify-normal mobile:w-[170px] mobile:gap-3">
            <button
              type="button"
              className="flex justify-center items-center"
              onClick={() => handleDateChange(-1)}
              aria-label="before button"
            >
              <ArrowLeft color="#A7A7A7" />
            </button>
            <div className="whitespace-nowrap text-body2R text-black laptop:text-body3R mobile:text-caption1R">
              {date.year}.{String(date.month).padStart(2, '0')}.{String(date.day).padStart(2, '0')}{' '}
              ({weekArr[date.weekday]})
            </div>
            <button
              type="button"
              className="flex justify-center items-center"
              onClick={() => handleDateChange(1)}
              aria-label="next button"
            >
              <ArrowRight color="#A7A7A7" />
            </button>
          </div>
          <FilterButton select={filter} onClick={() => setFilter(!filter)} />
        </section>
        <section className="bg-white rounded-2xl p-7 w-full min-h-[500px]" />
      </div>
    </div>
  );
}

export default Attendance;
