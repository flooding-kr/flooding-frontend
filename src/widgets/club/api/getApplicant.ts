import axios from 'axios';

interface Props {
  id: string;
}

export const getClassroom = async ({ id }: Props) => {
  const response = await axios.get(`/api/club/applicant`, {
    params: { id },
  });
  return response;
};
