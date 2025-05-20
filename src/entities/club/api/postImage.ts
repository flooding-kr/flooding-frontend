import axios from 'axios';

export async function postImage(formData: FormData) {
  return axios.post('/api/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
