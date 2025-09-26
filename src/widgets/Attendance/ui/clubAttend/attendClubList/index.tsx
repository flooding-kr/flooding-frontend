import Link from 'next/link';
import React from 'react';

import { ClubItem } from '@/entities/club';
import { ClubListType } from '@/shared/types/club';

import { useClubStore } from '../../../store/useClubStore';

interface Props {
  clubs: ClubListType[];
}

function AttendClubList({ clubs }: Props) {
  const { id, setId } = useClubStore();
  return (
    <section className="w-full gap-[25px] flex">
      {clubs?.map(item => (
        <button
          key={item.id}
          type="button"
          onClick={() => setId(item.id)}
          className={`${id === item.id && 'border-[2px] border-solid border-main-600 rounded-lg'}`}
        >
          <ClubItem
            image={item.thumbnail_image.presigned_url}
            name={item.name}
            recruiting={item.is_recruiting}
            status={item.status}
          />
        </button>
      ))}
    </section>
  );
}

export default AttendClubList;
