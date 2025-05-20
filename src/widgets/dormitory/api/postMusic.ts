import axios from 'axios';

interface Props {
  music: string;
}
export async function postMusic({ music }: Props) {
  return axios.post('/api/music', { music_url: music });
}
