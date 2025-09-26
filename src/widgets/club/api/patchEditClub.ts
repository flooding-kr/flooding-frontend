import axios from 'axios';

import { ClubType } from '@/shared/types/club';

interface EditClubData {
  name: string;
  description: string;
  type: ClubType;
  classroom_id: number;
  thumbnail_image_key: string;
  activity_image_keys: string[];
  id: string;
}

async function patchEditClub(data: EditClubData) {
  const response = await axios.patch('/api/club/edit-club', data);
  return response;
}

export default patchEditClub;
