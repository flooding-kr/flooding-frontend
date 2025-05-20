import { useState, useCallback } from 'react';

import useUser from '@/shared/hooks/useUser';

import { getSchedule } from '../api/getSchedule';

export const useSchedule = () => {
  const [schedule, setSchedule] = useState<string[] | null>();
  const user = useUser();
  const classroom = user?.student_info.classroom;
  const grade = user?.student_info.grade;
  const fetchSchedule = useCallback(
    async (date: string) => {
      if (grade && classroom) {
        const data = await getSchedule({ date, grade, classroom });
        setSchedule(data);
      }
    },
    [grade, classroom]
  );

  return { schedule, fetchSchedule };
};
