'use client';

import React, { useEffect } from 'react';

import { useMyClub } from '@/entities/club/model/useMyClub';
import { Error } from '@/shared/assets/icons';

import MyClubHeader from './header';
import ClubList from '../clubList';

function MyClub() {
  const { myClub, fetchMyClub } = useMyClub();

  useEffect(() => {
    fetchMyClub();
  }, []);

  return (
    <section className="flex flex-col gap-6 mobile:gap-4">
      <MyClubHeader />
      {!Array.isArray(myClub) || myClub.length === 0 ? (
        <div className="w-full flex flex-col items-center gap-6 py-[92px] mobile:py-12">
          <div className="w-[60px] h-[60px] mobile:w-[36px] mobile:h-[36px]">
            <Error color="#BDBDBD" />
          </div>
          <span className="text-title1M text-gray-400 laptop:text-body1R">
            아직 동아리가 없습니다...
          </span>
        </div>
      ) : (
        <ClubList clubs={myClub} type="my" />
      )}
    </section>
  );
}

export default MyClub;
