import React, { useEffect, useRef } from 'react';
import ReactCalendar from 'react-calendar';

import useCalendarStore from '@/shared/stores/useCalendarStore';
import 'react-calendar/dist/Calendar.css';

function Calendar() {
  const { currentDate, setDate, setCurrentDate } = useCalendarStore();
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (calendarRef.current) {
      const activeTile = calendarRef.current.querySelector<HTMLButtonElement>(
        '.react-calendar__tile--active'
      );
      if (activeTile) {
        activeTile.focus();
      }
    }
  }, [currentDate]);

  return (
    <div className="calendar-wrapper absolute top-14 right-10 z-50" ref={calendarRef}>
      <ReactCalendar
        value={currentDate}
        onChange={value => {
          if (value instanceof Date) {
            const year = value.getFullYear();
            const month = String(value.getMonth() + 1).padStart(2, '0');
            const date = String(value.getDate()).padStart(2, '0');
            setDate(`${year}-${month}-${date}`);
            setCurrentDate(value);
          }
        }}
        calendarType="hebrew"
        locale="kr"
        formatDay={(_locale, formatDate) => formatDate.toLocaleString('en', { day: 'numeric' })}
      />
    </div>
  );
}

export default Calendar;
