import axios from 'axios';

interface Props {
  floor: number;
  building: string;
}

export const getClassroom = async ({ floor, building }: Props) => {
  const response = await axios.get(`/api/classroom`, {
    params: { floor, building },
  });
  return response;
};
