import axios from 'axios';

interface Props {
  id: string;
  status: string;
  date: string;
  period: string;
}

export const getAttendList = async ({ id, date, period, status }: Props) => {
  const response = await axios.get(`/api/club/attend`, {
    params: { id, date, period, status },
  });
  return response;
};
