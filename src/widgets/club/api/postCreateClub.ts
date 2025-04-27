import axios from 'axios';

import { ClubType } from '@/shared/types/club';

interface CreateClubData {
  name: string;
  description: string;
  type: ClubType;
  classroom_id: number;
  main_image_url: string;
  activity_image_urls: string[];
}

async function postCreateClub(data: CreateClubData) {
  const response = await axios.post('/api/club/create-club', data);
  return response;
}

export default postCreateClub;
