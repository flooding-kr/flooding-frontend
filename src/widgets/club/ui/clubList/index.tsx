import Link from 'next/link';
import React from 'react';

import { ClubItem } from '@/entities/club';
import { ClubListType } from '@/shared/types/club';

interface Props {
  clubs: ClubListType[];
  type: 'my' | 'all';
}

function ClubList({ clubs, type }: Props) {
  return (
    <section
      className={`
        w-full gap-x-[25px] gap-y-8 grid grid-cols-[repeat(auto-fill,_minmax(252px,_1fr))] 
        laptop:gap-x-4 laptop:gap-y-4 laptop:grid-cols-[repeat(auto-fill,_minmax(182px,_1fr))]
        ${
          type === 'my'
            ? 'mobile:flex mobile:overflow-x-auto mobile:gap-x-3 mobile:hide-scrollbar'
            : 'mobile:grid mobile:grid-cols-[repeat(auto-fill,_minmax(144px,_1fr))]'
        }
      `}
    >
      {clubs?.map(item => (
        <Link key={item.id} href={`/club/${item.id}`} className="flex shrink-0 justify-center">
          <ClubItem
            image={item.thumbnail_image?.presigned_url || ''}
            name={item.name}
            recruiting={item.is_recruiting}
            status={item.status}
          />
        </Link>
      ))}
    </section>
  );
}

export default ClubList;
