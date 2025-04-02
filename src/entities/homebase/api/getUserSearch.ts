import axios from 'axios';

interface UserSearchData {
  name: string;
}

export const getUserSearch = async ({ name }: UserSearchData) => {
  const response = await axios.get(`/api/user/search`, {
    params: { name },
  });
  return response;
};
