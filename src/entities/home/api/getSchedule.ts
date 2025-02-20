/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Schedule } from '@/shared/types/schedule';

interface Props {
  currentDate: string;
  grade: number;
  lesson: number;
}

export const getSchedule = ({ currentDate, grade, lesson }: Props) => {
  const [schedule, setSchedule] = useState<Schedule[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const { data } = await axios.get(`neis/schedule/${currentDate}/${grade}/${lesson}`);
        setSchedule(data.hisTimetable?.[1]?.row);
      } catch (err) {
        setSchedule(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, [currentDate, grade, lesson]);

  return { schedule, loading };
};
