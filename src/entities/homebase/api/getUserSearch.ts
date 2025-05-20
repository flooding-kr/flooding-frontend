import axios from 'axios';

interface UserSearchData {
  name: string;
}

export const getUserSearch = async ({ name }: UserSearchData) => {
  const response = await axios.get(`/api/user/student/search`, {
    params: { name },
  });
  return response;
};
