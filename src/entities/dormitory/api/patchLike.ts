import axios from 'axios';

interface Props {
  id: string;
}

async function patchLike({ id }: Props) {
  const response = await axios.patch(`/api/music/like`, {}, { params: { id } });
  return response;
}

export default patchLike;
