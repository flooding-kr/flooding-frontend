'use client';

import React, { useEffect, useState } from 'react';

import { Error } from '@/shared/assets/icons';
import { ApplyType } from '@/shared/types/home';
import { Button } from '@/shared/ui';

import checkApply from '../../model/checkApply';
import { useNotifyStore } from '../../store/useNotifyStore';

interface Props {
  title: string;
  count: number;
  maxCount: number;
  activationTime: string;
  available: ApplyType;
  onClick: () => void;
  isPending?: boolean;
}

export default function ApplyBoard({
  title,
  count,
  maxCount,
  activationTime,
  available,
  onClick,
  isPending,
}: Props) {
  const [isTimeActive, setIsTimeActive] = useState(false);
  const [isCountFull, setIsCountFull] = useState(false);
  const { setModal, setType } = useNotifyStore();
  const [text, setText] = useState('로딩중...');

  const notifyClick = () => {
    setType(title);
    setModal(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkApply({
        activationTime,
        available,
        count,
        maxCount,
        setIsTimeActive,
        setIsCountFull,
        setText,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activationTime, available, count, maxCount, isCountFull, isTimeActive, text, isPending]);

  return (
    <section className="flex-1 bg-white rounded-lg px-12 py-8 w-full max-w-[668px] max-h-[305px] laptop:max-w-full mobile:px-5 mobile:py-4">
      <div className="flex flex-col gap-9 mobile:gap-5">
        <div className="flex justify-between">
          <p className="text-body1B text-center text-gray-600 mobile:text-body3B">{title}</p>
          <button type="button" onClick={notifyClick} className="w-6 h-6">
            <Error color="#909090" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-6">
          <p className="text-title1M text-center text-black mobile:text-body1B">
            {count}/{maxCount}
          </p>
          <div className="flex justify-start w-full h-full relative">
            <div className="w-full bg-main-100 h-3 rounded-lg z-10" />
            <div
              className="h-3 rounded-lg absolute top-0 left-0 z-20"
              style={{
                width: `${(count / maxCount) * 100}%`,
                background: count !== maxCount ? `#AFBFF9` : `#1EB916`,
              }}
            />
          </div>
        </div>
        <Button
          text={text}
          disabled={
            maxCount === 0 ||
            !isTimeActive ||
            (text !== '신청 취소' && isCountFull) ||
            isPending ||
            text === '신청 불가'
          }
          onClick={onClick}
          type="button"
          closed={text === '신청 불가'}
        />
      </div>
    </section>
  );
}
