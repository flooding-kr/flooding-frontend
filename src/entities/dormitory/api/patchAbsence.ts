import axios from 'axios';

interface Props {
  id: string;
}

async function patchAbsence({ id }: Props) {
  const response = await axios.patch(`/api/admin/self-study/absence`, {}, { params: { id } });
  return response;
}

export default patchAbsence;
