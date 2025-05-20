import Link from 'next/link';
import React from 'react';

import { ClubItem } from '@/entities/club';
import { ClubListType } from '@/shared/types/club';

interface Props {
  clubs: ClubListType[];
}

function ClubList({ clubs }: Props) {
  return (
    <section className="w-full flex flex-wrap gap-x-[25px] gap-y-8">
      {clubs?.map(item => (
        <Link key={item.id} href={`/club/${item.id}`}>
          <ClubItem
            image={item.thumbnail_image_url}
            name={item.name}
            recruiting={item.is_recruiting}
          />
        </Link>
      ))}
    </section>
  );
}

export default ClubList;
