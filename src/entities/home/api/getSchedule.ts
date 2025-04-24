import axios from 'axios';

interface ScheduleParams {
  date: string;
  grade: number;
  classroom: number;
}

export const getSchedule = async ({
  date,
  classroom,
  grade,
}: ScheduleParams): Promise<string[]> => {
  const { data } = await axios.get(
    `/api/neis/schedule?date=${date}&grade=${grade}&classroom=${classroom}`
  );
  return data;
};
