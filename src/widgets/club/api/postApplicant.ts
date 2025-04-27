import axios from 'axios';

interface Props {
  id: string;
}

async function postApply({ id }: Props) {
  const response = await axios.post('/api/club/applicant', { club_id: id });
  return response;
}

export default postApply;
