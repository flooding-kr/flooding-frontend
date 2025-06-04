import axios from 'axios';

interface Props {
  id: string;
}

async function patchAttend({ id }: Props) {
  const response = await axios.patch(`/api/admin/self-study/attend`, {}, { params: { id } });
  return response;
}

export default patchAttend;
