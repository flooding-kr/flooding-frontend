import { useParams } from 'next/navigation';
import { useCallback, useState } from 'react';

import { ClubDetail } from '@/shared/types/club';

import { getClubDetail } from '../api/getClubDetail';

function useClubDetail() {
  const [detailData, setDetailData] = useState<ClubDetail | null>(null);

  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : params.id?.[0];

  const fetchClubDetail = useCallback(async () => {
    if (!id) return;
    try {
      const { data } = await getClubDetail({ id });
      console.log(data);
      setDetailData(data);
    } catch (error) {
      console.error('Failed to fetch club detail', error);
    }
  }, []);

  return { detailData, fetchClubDetail };
}

export default useClubDetail;
