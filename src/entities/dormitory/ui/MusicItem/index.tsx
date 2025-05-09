'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { Like } from '@/shared/assets/icons';

interface Props {
  musicImg: string;
  title: string;
  applicant: string;
  likeCount: number;
  likeState: boolean;
}

export default function MusicItem({ musicImg, applicant, title, likeCount, likeState }: Props) {
  const [like, setLike] = useState(likeState);

  return (
    <div className="flex justify-between max-w-[606px] tablet:max-w-full w-full">
      <div className="flex items-center gap-6">
        <Image alt="썸네일" src={musicImg} className="w-20 h-20 rounded-lg" />
        <div className="flex flex-col gap-4">
          <p className="text-body1B text-black truncate max-w-[380px]">{title}</p>
          <p className="text-body2R text-gray-700">{applicant}</p>
        </div>
      </div>
      <button className="flex items-center gap-3" onClick={() => setLike(!like)} type="button">
        <div className="w-10 h-10">
          <Like state={like} />
        </div>
        <p className={like ? 'text-body2R text-main-600' : 'text-body2R text-gray-700'}>
          {likeCount}
        </p>
      </button>
    </div>
  );
}
