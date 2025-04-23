import axios from 'axios';
import { toast } from 'react-toastify';

export const deleteHomebaseGroup = async (homebaseGroupId: string) => {
  try {
    const response = await axios.delete(`/api/homebase/${homebaseGroupId}`);
    toast.success('홈베이스 예약이 취소 되었습니다');
    return response;
  } catch (error) {
    toast.error('홈베이스 예약 취소에 실패했습니다.');
    throw error;
  }
};
