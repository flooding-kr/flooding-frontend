'use client';

import React, { useEffect } from 'react';

import ClubDetailContent from '@/widgets/club/ui/clubDetail/content';
import ClubDetailHeader from '@/widgets/club/ui/clubDetail/header';
import RecruitmentCard from '@/widgets/club/ui/clubDetail/recruitmentCard';

import useClubDetail from '../../model/useClubDetail';

function ClubDetailWrapper() {
  const { detailData, fetchClubDetail } = useClubDetail();

  useEffect(() => {
    fetchClubDetail();
  }, []);

  if (!detailData) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="relative max-w-[1360px] w-full pt-14 pb-24 flex flex-col gap-10">
      <ClubDetailHeader name={detailData.name} id={detailData.id} />
      <div className="flex gap-10">
        <ClubDetailContent
          building={detailData.classroom.building_type}
          floor={detailData.classroom?.floor}
          thumbnail={detailData.thumbnail_image_url}
          description={detailData.description}
          activity={detailData.activity_image_urls}
          leaderName={detailData.leader.name}
          teacherName={detailData.teacher?.name || ''}
          members={detailData.club_members}
        />
        <RecruitmentCard
          recruiting={detailData.is_recruiting}
          type={detailData.type}
          applicant={detailData.applicant_count}
          clubId={detailData.id}
        />
      </div>
    </div>
  );
}

export default ClubDetailWrapper;
