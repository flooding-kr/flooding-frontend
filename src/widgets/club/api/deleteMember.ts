import axios from 'axios';

interface Props {
  id: string;
}

export const deleteMember = async ({ id }: Props) => {
  const response = await axios.delete(`/api/club/leave`, {
    params: { id },
  });
  return response;
};
