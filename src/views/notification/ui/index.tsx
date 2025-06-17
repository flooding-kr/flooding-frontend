'use client';

import React, { useState } from 'react';

import { NotificationItem } from '@/entities/notification';
import WriteButton from '@/entities/notification/ui/writeButton';
import useUser from '@/shared/hooks/useUser';
import FilterButton from '@/shared/ui/FilterButton';
import FilterModal from '@/shared/ui/FilterModal';
import Portal from '@/shared/ui/Portal';

export default function Notification() {
  const user = useUser();
  const [filter, setFilter] = useState(false);

  return (
    <div className="w-full flex justify-center pt-12 pb-20 mobile:gap-6 laptop:p-4">
      <div className="w-full max-w-[1360px] flex flex-col gap-6">
        <header className="w-full flex justify-between">
          <p className="text-title3B">공지사항</p>
          <FilterButton onClick={() => setFilter(true)} select={false} />
          {filter && (
            <Portal onClose={() => setFilter(false)}>
              <FilterModal
                list={['기숙사', '홈베이스', '동아리', '전체']}
                onClick={() => setFilter(false)}
              />
            </Portal>
          )}
          x
        </header>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 7 }).map(t => (
            <NotificationItem
              key={`notification-${t}`}
              title="웹사이트 업데이트 완료 및 정상 운영 안내"
              content="설명설명설명설명설명설명설명설명설명ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss설명설명설명설명설ㅓㅓ명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명"
              creationDate="2025-03-04"
              tag="기숙사"
            />
          ))}
        </div>
      </div>
      {user?.roles?.includes('ROLE_TEACHER') && (
        <div className="absolute bottom-[90px] right-[115px]">
          <WriteButton />
        </div>
      )}
    </div>
  );
}
