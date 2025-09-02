import axios from 'axios';

interface Props {
  id: string;
}

export const postOpen = async ({ id }: Props) => {
  const response = await axios.post(`/api/club/detail/open`, {
    params: { id },
  });
  return response;
};
