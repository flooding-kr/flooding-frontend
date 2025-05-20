import axios from 'axios';

interface Props {
  id: string;
}

export const deleteAdminMusic = async ({ id }: Props) => {
  const response = await axios.delete(`/api/admin/music`, { params: { id } });
  return response;
};
