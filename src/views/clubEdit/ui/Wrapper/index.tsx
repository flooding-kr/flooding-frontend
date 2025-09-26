'use client';

import { useEffect } from 'react';

import useClubDetail from '@/views/clubDetail/model/useClubDetail';
import { EditClubForm } from '@/widgets/club/ui/clubEdit';
import { CreateClubHeader } from '@/widgets/club/ui/createClub';

function EditClubWrapper() {
  const { detailData, fetchClubDetail } = useClubDetail();

  useEffect(() => {
    fetchClubDetail();
  }, []);

  if (!detailData) return null;

  return (
    <div className="max-w-[1360px] w-full flex flex-col gap-12">
      <CreateClubHeader />
      <EditClubForm clubData={detailData} />
    </div>
  );
}

export default EditClubWrapper;
