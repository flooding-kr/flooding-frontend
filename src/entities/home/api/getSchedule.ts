import axios from 'axios';

interface ScheduleParams {
  date: string;
}

export const getSchedule = async ({ date }: ScheduleParams): Promise<string[]> => {
  const { data } = await axios.get(`/api/neis/schedule/${date}`);
  return data;
};
