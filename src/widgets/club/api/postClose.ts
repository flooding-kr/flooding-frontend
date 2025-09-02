import axios from 'axios';

interface Props {
  id: string;
}

export const postClose = async ({ id }: Props) => {
  const response = await axios.post(`/api/club/detail/close`, {
    params: { id },
  });
  return response;
};
