'use client';

import React, { useEffect, useState } from 'react';

import { Error } from '@/shared/assets/icons';

import MyClubHeader from './header';
import { ClubListType } from '../../types/clubListType';
import ClubList from '../clubList';

function MyClub() {
  const [club, setClub] = useState<ClubListType[]>([]);

  useEffect(() => {
    setClub([]);
  }, []);

  return (
    <section className="flex flex-col gap-6">
      <MyClubHeader />
      {club.length === 0 ? (
        <div className="w-full flex flex-col items-center gap-6 py-[92px]">
          <Error width={60} height={60} color="#BDBDBD" />
          <span className="text-title1M text-gray-400">아직 동아리가 없습니다...</span>
        </div>
      ) : (
        <ClubList clubs={club} />
      )}
    </section>
  );
}

export default MyClub;
