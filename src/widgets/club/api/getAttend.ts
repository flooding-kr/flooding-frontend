import axios from 'axios';

import { AttendType } from '@/shared/types/attend';

interface Props {
  id: string;
  date: string;
  period: string;
  status?: AttendType;
}

export const getAttend = async ({ id, date, period, status }: Props) => {
  const response = await axios.get(`/api/club/applicant`, {
    params: { id, date, period, status },
  });
  return response;
};
