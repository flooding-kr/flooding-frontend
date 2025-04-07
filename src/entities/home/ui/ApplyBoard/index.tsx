'use client';

import React, { useEffect, useState } from 'react';

import { Error } from '@/shared/assets/icons';
import { Button } from '@/shared/ui';

interface Props {
  title: string;
  count: number;
  maxCount: number;
  activationTime: string;
}

export default function ApplyBoard({ title, count, maxCount, activationTime }: Props) {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');

  const tick = () => {
    const currentTime = new Intl.DateTimeFormat('kr', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format();
    const [hour, minute] = activationTime.split(':');
    const isTimeActive = currentTime >= activationTime && currentTime < '21:00';
    const isCountFull = count === maxCount;

    setIsActive(isTimeActive && !isCountFull);
    if (isCountFull) {
      setText('신청 불가');
    } else if (isTimeActive) {
      setText('신청하기');
    } else {
      setText(`${hour}시 ${minute}분 시작`);
    }
  };

  useEffect(() => {
    const time = setInterval(tick, 1000);
    return () => clearInterval(time);
  }, []);

  return (
    <section className="flex-1 bg-white rounded-lg px-12 py-8 w-full max-w-[668px] max-h-[305px] mobile:px-5 mobile:py-4">
      <div className="flex flex-col gap-9 mobile:gap-5">
        <div className="flex justify-between">
          <p className="text-body1B text-center text-gray-600 mobile:text-body3B">{title}</p>
          <Error color="#909090" />
        </div>
        <div className="flex flex-col items-center gap-6">
          <p className="text-title1M text-center text-black mobile:text-body1B">
            {count}/{maxCount}
          </p>
          <div className="flex justify-start w-full h-full relative">
            <div className="w-full bg-main-100 h-3 rounded-lg z-10" />
            <div
              className="h-3 rounded-lg"
              style={{
                width: `calc(${(count / maxCount) * 100}%)`,
                background: count !== maxCount ? `#AFBFF9` : `#1EB916`,
              }}
            />
          </div>
        </div>
        <Button
          text={text}
          disabled={!isActive}
          onClick={() => console.log('dd')}
          type="button"
          closed={text === '신청 불가'}
        />
      </div>
    </section>
  );
}
