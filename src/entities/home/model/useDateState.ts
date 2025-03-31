import { useState } from 'react';

import { getDate } from './getDate';

interface ScheduleDate {
  year: number;
  month: number;
  day: number;
  weekday: number;
}

export const useDateState = () => {
  const { year, month, day, weekday } = getDate();
  const [date, setDate] = useState<ScheduleDate>({ year, month, day, weekday });

  const handleDateChange = (days: number) => {
    const newDate = new Date(date.year, date.month - 1, date.day + days);
    setDate({
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
      day: newDate.getDate(),
      weekday: newDate.getDay(),
    });
  };

  return { date, handleDateChange };
};
