import React, { useState } from 'react';

import { ArrowLeft, ArrowRight, Error } from '@/shared/assets/icons';

import { getDate } from '../../api/getDate';
import { getMeal } from '../../api/getMeal';

export default function MealBoard() {
  const { year, month, day, weekday } = getDate();
  const [dailyMeal, setDailyMeal] = useState(0);
  const [date, setDate] = useState({ year, month, day, weekday });

  const currentDate = `${date.year}${String(date.month).padStart(2, '0')}${String(date.day).padStart(2, '0')}`;
  const { meal } = getMeal({ currentDate, MMEAL_SC_CODE: dailyMeal + 1 });

  const dailyMealArr = ['조식', '중식', '석식'];
  const weekArr = ['일', '월', '화', '수', '목', '금', '토'];

  const handleDateChange = (days: number) => {
    const newDate = new Date(date.year, date.month - 1, date.day + days);

    setDate({
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
      day: newDate.getDate(),
      weekday: newDate.getDay(),
    });
  };

  const handleMealChange = (idx: number) => {
    setDailyMeal(idx);
  };

  return (
    <section className="bg-white rounded-lg px-8 py-6 max-w-[548px] h-[418px] w-full flex flex-col mobile:max-w-[484px] mobile:min-h-[243px] mobile:max-h-[260px] mobile:h-fit mobile:p-3">
      <div className="flex flex-col gap-6 flex-1 mobile:gap-4">
        <div className="flex flex-col gap-6 flex-1 border-b-[1px] border-gray-200 border-solid mobile:gap-4 mobile:border-0">
          <div className="flex flex-col gap-6 mobile:gap-[13px]">
            <header className="flex justify-between">
              <p className="text-body1B text-black mobile:text-body3B">급식</p>
              <div className="flex items-center gap-4 mobile:gap-3">
                <button
                  type="button"
                  className="flex justify-center items-center"
                  onClick={() => handleDateChange(-1)}
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
                  onClick={() => handleDateChange(+1)}
                >
                  <ArrowRight color="#121212" />
                </button>
              </div>
            </header>
            <div className="bg-main-100 flex justify-between rounded-lg">
              {dailyMealArr.map((item, idx) => (
                <button
                  key={item}
                  type="button"
                  className={`px-12 mobile:px-[31px] py-4 mobile:py-3 rounded-lg transition-colors duration-300 ease-in-out ${
                    dailyMeal === idx ? 'bg-main-600' : ''
                  }`}
                  disabled={dailyMeal === idx}
                  onClick={() => handleMealChange(idx)}
                >
                  <p className="text-body2B text-white mobile:text-caption1B">{item}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            {meal ? (
              <div className="flex flex-wrap gap-3 h-full justify-start">
                {meal.DDISH_NM.split('<br/>').map(dish => (
                  <p key={dish} className="w-[40%] text-body3R text-black mobile:text-caption1R">
                    {dish.split(' ')[0]}
                  </p>
                ))}
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col justify-center items-center gap-4">
                  <Error color="#A7A7A7" />
                  <p className="text-body2R text-gray-500">오늘은 급식이 없습니다.</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <footer className="flex justify-end mobile:hidden">
          <p className="text-body2R text-main-400">{meal?.CAL_INFO ?? '0 Kcal'}</p>
        </footer>
      </div>
    </section>
  );
}
