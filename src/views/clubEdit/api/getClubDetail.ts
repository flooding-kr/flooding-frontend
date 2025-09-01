import axios from 'axios';

interface Props {
  id: string;
}

export const getClubDetail = async ({ id }: Props) => {
  const response = await axios.get(`/api/club/detail`, { params: { id } });
  return response;
};
