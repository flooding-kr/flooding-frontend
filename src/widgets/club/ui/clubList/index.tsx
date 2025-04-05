import React from 'react';

import ClubItem from '@/entities/club/ui/clubItem';

import { ClubListType } from '../../types/clubListType';

interface Props {
  clubs: ClubListType[];
}

function ClubList({ clubs }: Props) {
  return (
    <section className="w-full flex flex-wrap gap-x-[25px] gap-y-8">
      {clubs.map(item => (
        <ClubItem key={item.id} image="" name={item.name} state={item.status} />
      ))}
    </section>
  );
}

export default ClubList;
