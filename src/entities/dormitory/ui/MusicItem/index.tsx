'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { Like, Trash } from '@/shared/assets/icons';
import useUser from '@/shared/hooks/useUser';
import CancelModal from '@/shared/ui/CancelModal';

import { useAdminDeleteMusic } from '../../model/useAdminDeleteMusic';
import { useChangeLike } from '../../model/useChangeLike';
import { useDeleteMusic } from '../../model/useDeleteMusic';

interface Props {
  id: string;
  musicImg: string;
  title: string;
  applicant: string;
  likeCount: number;
  likeState: boolean;
  musicUrl: string;
  myMusic: boolean;
}

export default function MusicItem({
  id,
  musicImg,
  applicant,
  title,
  likeCount,
  likeState,
  musicUrl,
  myMusic,
}: Props) {
  const [like, setLike] = useState({ count: likeCount, liked: likeState });
  const [modal, setModal] = useState(false);
  const { mutate: fetchLike } = useChangeLike();
  const { mutate: deleteMusic } = useDeleteMusic();
  const { mutate: deleteAdminMusic } = useAdminDeleteMusic({ id });
  const user = useUser();

  useEffect(() => {
    setLike({ count: likeCount, liked: likeState });
  }, [likeCount, likeState]);

  const handleDeleteType = () => {
    if (
      user?.roles?.includes('ROLE_DORMITORY_COUNCIL') ||
      user?.roles?.includes('ROLE_DORMITORY_TEACHER')
    ) {
      return deleteAdminMusic();
    }
    return deleteMusic();
  };

  return (
    <Link href={musicUrl} target="_blank" className="flex justify-between w-full">
      <div className="flex items-center gap-6 mobile:gap-3 flex-1 min-w-0">
        <div className="relative w-28 h-20 mobile:w-[46px] mobile:h-[46px] shrink-0">
          <Image alt="썸네일" src={musicImg} fill className="rounded-lg" />
        </div>

        <div className="flex flex-col gap-4 mobile:gap-2 w-full min-w-0 overflow-hidden">
          <p className="text-body1B text-black truncate w-full min-w-0 mobile:text-caption1B">
            {title}
          </p>
          <p className="text-body2R text-gray-700 mobile:text-caption2M">{applicant}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="w-16 flex items-center gap-3 shrink-0 mobile:w-12"
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            setLike(prev => {
              const liked = !prev.liked;
              const count = liked ? prev.count + 1 : prev.count - 1;
              fetchLike(id, {
                onSuccess: res => {
                  setLike({ count: res.data.like_count, liked: res.data.has_user_liked });
                },
              });
              return { count, liked };
            });
          }}
          type="button"
        >
          <div className="w-7 h-7 mobile:w-4 mobile:h-4">
            <Like state={like.liked} />
          </div>
          <p
            className={`text-body2R mobile:text-caption2M ${
              like.liked ? 'text-main-600' : 'text-gray-700'
            }`}
          >
            {like.count}
          </p>
        </button>
        {(myMusic ||
          user?.roles?.includes('ROLE_DORMITORY_COUNCIL') ||
          user?.roles?.includes('ROLE_DORMITORY_TEACHER')) && (
          <button
            className="flex items-center gap-3 shrink-0"
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              setModal(true);
            }}
            type="button"
          >
            <div className="w-7 h-7 mobile:w-4 mobile:h-4">
              <Trash color="#CE2020" />
            </div>
            <p className="text-body2R mobile:text-caption2M text-error">삭제</p>
          </button>
        )}
      </div>
      {modal && (
        <CancelModal
          onClose={() => setModal(false)}
          title="신청 음악 삭제"
          description={'신청하신 음악을 삭제하시겠습니까?\n삭제 후에는 복구가 불가능합니다.'}
          checkText="삭제"
          onClick={handleDeleteType}
        />
      )}
    </Link>
  );
}
