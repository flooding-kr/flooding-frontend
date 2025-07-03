import React from 'react';

import MusicItem from '@/entities/dormitory/ui/MusicItem';
import { getDate } from '@/entities/home/model/getDate';
import { Error } from '@/shared/assets/icons';
import useUser from '@/shared/hooks/useUser';
import useCalendarStore from '@/shared/stores/useCalendarStore';
import { Music } from '@/shared/types/music';
import { useFetchMusic } from '@/widgets/dormitory/model/useFetchMusic';
import { useMusicTypeStore } from '@/widgets/dormitory/store/useMusicTypeStore';

function MusicList() {
  const { year, month, day } = getDate();
  const user = useUser();
  const { type } = useMusicTypeStore();
  const { date } = useCalendarStore();
  const currentDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const music = useFetchMusic({ date: date || currentDate, type });

  return (
    <div className="w-[1360px] h-full text- bg-white flex flex-col px-7 py-6 overflow-y-auto hidden-scrollbar rounded-lg laptop:w-full mobile:px-3 mobile:py-4">
      {music?.length ? (
        <div className="w-full flex flex-col justify-between gap-y-7 laptop:gap-4">
          {music?.map((item: Music) => (
            <MusicItem
              key={item.music_id}
              id={item.music_id}
              applicant={`${item.proposer.school_number} ${item.proposer.name}`}
              likeCount={item.like_count}
              likeState={item.is_liked_by_user}
              musicImg={item.thumbnail_image_url}
              title={item.music_name}
              musicUrl={item.music_url}
              myMusic={item.is_applied_by_user || user?.roles?.includes('ROLE_ADMIN') || false}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex justify-center items-center gap-4">
            <div className="w-9 h-9 mobile:w-6 mobile:h-6">
              <Error color="#A7A7A7" />
            </div>
            <p className="text-body1R text-gray-500 mobile:text-body2R">신청자가 없습니다.</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default MusicList;
