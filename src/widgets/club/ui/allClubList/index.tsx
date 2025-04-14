'use client';

import React, { useEffect } from 'react';

import { useClubList } from '@/entities/club/model/useClubList';
import { useClubTypeStore } from '@/entities/club/store/useClubTypeStore';
import { Error } from '@/shared/assets/icons';

import AllClubListHeader from './header';
import ClubList from '../clubList';

function AllClubList() {
  const { clublist, fetchClubList } = useClubList();
  const { type } = useClubTypeStore();

  useEffect(() => {
    fetchClubList();
  }, [type]);

  return (
    <div className="flex flex-col gap-[24px]">
      <AllClubListHeader />
      {!Array.isArray(clublist) || clublist.length === 0 ? (
        <div className="w-full flex flex-col items-center gap-6 py-[92px]">
          <Error width={60} height={60} color="#BDBDBD" />
          <span className="text-title1M text-gray-400">아직 동아리가 없습니다...</span>
        </div>
      ) : (
        <ClubList clubs={clublist} />
      )}
    </div>
  );
}

export default AllClubList;
