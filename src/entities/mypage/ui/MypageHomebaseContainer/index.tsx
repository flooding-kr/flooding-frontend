'use client';

import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';

import { ArrowBig } from '@/shared/assets/svg';
import { Button, Tag } from '@/shared/ui';

const cardData = [
  { id: 1, floor: '2층', time: '8교시' },
  { id: 2, floor: '3층', time: '7교시' },
  { id: 3, floor: '4층', time: '6교시' },
  { id: 4, floor: '5층', time: '5교시' },
];

export default function HomeBaseSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
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

  // 슬라이더 너비 측정
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
          className="w-full overflow-hidden px-3 touch-pan-x relative h-[200px]"
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
                key={card.id}
                className="flex-shrink-0 w-[calc(50%-12px)] flex flex-col gap-8 bg-white rounded-lg py-5 px-6 shadow-md"
              >
                <div className="w-full flex justify-between items-center">
                  <p className="text-body1R">홈베이스</p>
                  <div className="flex gap-4">
                    <Tag text={card.floor} />
                    <Tag text={card.time} />
                  </div>
                </div>
                <Button text="취소하기" error />
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
