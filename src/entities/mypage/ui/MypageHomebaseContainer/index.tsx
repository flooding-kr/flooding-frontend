'use client';

import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

import { ArrowBig } from '@/shared/assets/svg';
import { Button, Tag } from '@/shared/ui';

import { deleteHomebaseGroup } from '../../api/deleteHomebaseGroup';
import { getHomebaseMyselfdata } from '../../api/getHomebasemyselfdata';

type HomebaseCard = {
  homebase_group_id: string;
  homebase_table: {
    id: number;
    floor: number;
    table_number: number;
    max_seats: number;
  };
  period: number;
  is_proposer: boolean;
  participants: {
    name: string;
    school_number: string;
  }[];
  max_seats: number;
};

export default function HomeBaseSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [cardData, setCardData] = useState<HomebaseCard[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const canGoNext = startIndex + 2 < cardData.length;
  const canGoPrev = startIndex > 0;

  const handlePrev = () => {
    if (canGoPrev) {
      setStartIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setStartIndex(prev => prev + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) handlePrev();
    if (deltaX < -50) handleNext();
  };

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHomebaseMyselfdata();
        const apiData = response.data;

        setCardData(apiData);
      } catch (error) {
        toast.error('홈베이스 정보 가져오기 실패');
      }
    };

    fetchData();
  }, []);
  const handleDeleteHomebaseGroup = async (homebaseGroupId: string) => {
    try {
      await deleteHomebaseGroup(homebaseGroupId);
      setCardData(prevData => prevData.filter(card => card.homebase_group_id !== homebaseGroupId));
    } catch (error) {
      console.error('홈베이스 그룹 삭제 실패:', error);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <p className="text-title3B mb-6">홈베이스 신청 정보</p>

      <div className="flex w-full justify-between items-center">
        <button
          type="button"
          onClick={handlePrev}
          className={`transition-opacity duration-300 ${canGoPrev ? 'opacity-100' : 'opacity-0'}`}
        >
          <ArrowBig />
        </button>

        <div
          className="w-full overflow-hidden px-3 touch-pan-x relative h-[240px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          ref={containerRef}
        >
          <motion.div
            className="flex gap-6"
            animate={{ x: -startIndex * (containerWidth / 2 + 12) }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {cardData.map(card => (
              <div
                key={card.homebase_group_id}
                className="flex-shrink-0 w-[calc(50%-12px)] flex flex-col gap-4 bg-white rounded-lg py-5 px-6 shadow-md"
              >
                <div className="flex justify-between items-center">
                  <p className="text-body1B">홈베이스</p>
                  <div className="flex gap-2">
                    <Tag text={`${card.homebase_table.floor}층`} />
                    <Tag text={`${card.period}교시`} />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  {card.participants.map(p => (
                    <span key={p.school_number} className="text-caption1R text-gray-500">
                      {p.name} ({p.school_number})
                    </span>
                  ))}
                </div>

                {card.is_proposer && (
                  <Button
                    text="취소하기"
                    error
                    onClick={() => handleDeleteHomebaseGroup(card.homebase_group_id)}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          className={`transition-opacity duration-300 ${canGoNext ? 'opacity-100' : 'opacity-0'}`}
        >
          <ArrowBig right />
        </button>
      </div>
    </div>
  );
}
