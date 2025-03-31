import { useState, useCallback } from 'react';

import { getSchedule } from '../api/getSchedule';

export const useSchedule = () => {
  const [schedule, setSchedule] = useState<string[] | null>();

  const fetchSchedule = useCallback(async (date: string) => {
    const data = await getSchedule({ date });
    setSchedule(data);
  }, []);

  return { schedule, fetchSchedule };
};
