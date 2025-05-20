import React, { useEffect, useState } from 'react';

import { ArrowLeft, ArrowRight, Error } from '@/shared/assets/icons';

import { getDate } from '../../model/getDate';
import { useMeal } from '../../model/useMeal';

export default function MealBoard() {
  const { meal, fetchMeal } = useMeal();
  const { year, month, day, weekday, hour } = getDate();
  const [date, setDate] = useState({ year, month, day, weekday });

  const currentDate = `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`;

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

  const [dailyMeal, setDailyMeal] = useState(() => {
    if (hour >= 19) {
      handleDateChange(1);
      return 0;
    } else if (hour >= 13) {
      return 2;
    } else if (hour >= 8) {
      return 1;
    } else {
      return 0;
    }
  });

  const handleMealChange = (idx: number) => {
    setDailyMeal(idx);
  };
  useEffect(() => {
    fetchMeal(currentDate, dailyMeal);
  }, [currentDate, dailyMeal]);

  useEffect(() => {}, [hour]);

  return (
    <section className="bg-white rounded-lg px-8 py-6 w-full h-[418px] flex flex-col mobile:min-h-[303px] mobile:h-fit mobile:p-3 mobile:w-full tablet:min-w-[300px] tablet:max-w-full">
      <div className="flex flex-col gap-2 flex-1 mobile:gap-4">
        <div className="flex flex-col gap-6 flex-1 mobile:gap-4">
          <div className="flex flex-col gap-6 mobile:gap-[13px]">
            <header className="flex justify-between">
              <p className="text-body1B text-black tablet:text-body2B mobile:text-body3B">급식</p>
              <div className="flex items-center gap-4 mobile:gap-3">
                <button
                  type="button"
                  className="flex justify-center items-center"
                  onClick={() => handleDateChange(-1)}
                >
                  <ArrowLeft color="#121212" />
                </button>
                <div className="text-body2R text-black tablet:text-body3R mobile:text-caption1R">
                  {date.year}.{String(date.month).padStart(2, '0')}.
                  {String(date.day).padStart(2, '0')} ({weekArr[date.weekday]})
                </div>
                <button
                  type="button"
                  className="flex justify-center items-center"
                  onClick={() => handleDateChange(1)}
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
                  className={`px-12 py-4 w-[33%] mobile:flex mobile:justify-center mobile:items-center tablet:px-[24px] tablet:py-3 mobile:py-3 mobile:max-w-[28%] rounded-lg transition-colors duration-300 ease-in-out ${
                    dailyMeal === idx && 'bg-main-600'
                  }`}
                  disabled={dailyMeal === idx + 1}
                  onClick={() => handleMealChange(idx)}
                >
                  <p
                    className={`text-body2B tablet:text-body3B mobile:text-caption1B ${dailyMeal === idx ? 'text-white' : 'text-gray-700'}`}
                  >
                    {item}
                  </p>
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full h-full flex justify-center items-center bg-gray-100 rounded-lg tablet:justify-between">
            {meal?.menu && !(meal.menu.length === 0) ? (
              <div className="flex flex-wrap gap-3 w-full h-full justify-start px-[30px] py-6 mobile:p-4">
                {meal.menu.map(dish => (
                  <p key={dish} className="w-[45%] text-body3R text-black mobile:text-caption1R">
                    {dish}
                  </p>
                ))}
              </div>
            ) : (
              <div className="w-full flex justify-center">
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className="w-6 h-6">
                    <Error color="#A7A7A7" />
                  </div>
                  <p className="text-body2R text-gray-500">오늘은 급식이 없습니다.</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <footer className="flex justify-end">
          <p className="text-body3R text-gray-500 mobile:text-caption1R">{meal?.kcal ?? '0'}Kcal</p>
        </footer>
      </div>
    </section>
  );
}
