'use client';

import React from 'react';

import { NotificationItem } from '@/entities/notification';
import FilterButton from '@/shared/ui/FilterButton';

export default function Notification() {
  return (
    <div className="w-full flex justify-center pt-12 pb-20 mobile:gap-6 mobile:p-4">
      <div className="w-full max-w-[1360px] flex flex-col gap-6">
        <header className="w-full flex justify-between">
          <p className="text-title3B">공지사항</p>
          <FilterButton onClick={() => console.log('filter')} select={false} />
        </header>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 7 }).map(t => (
            <NotificationItem
              key={`notification-${t}`}
              title="웹사이트 업데이트 완료 및 정상 운영 안내"
              content="설명설명설명설명설명설명설명설명설명설명설명설명설명설ㅓㅓ명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명"
              creationDate="2025-03-04"
              tag="기숙사"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
