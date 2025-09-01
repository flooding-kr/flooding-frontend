import axios from 'axios';

interface Props {
  id: string;
}

export const deleteClub = async ({ id }: Props) => {
  const response = await axios.delete(`/api/club/detail`, {
    params: { id },
  });
  return response;
};
