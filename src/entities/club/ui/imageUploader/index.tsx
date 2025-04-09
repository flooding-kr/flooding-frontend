'use client';

import React, { useRef } from 'react';

import { ImageIcon } from '@/shared/assets/icons';

import { useShowImage } from '../../model/useShowImage';

interface Props {
  isProfile?: boolean;
}

function ImageUploader({ isProfile }: Props) {
  const { handleAddImages, handleAddProfileImages } = useShowImage();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDivClick = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleDivClick}
        className={`cursor-pointer bg-white rounded-lg flex flex-col items-center justify-center gap-5 ${
          isProfile
            ? 'w-[152px] h-[152px] max-w-[152px] max-h-[152px] px-[25px] py-9'
            : 'w-[240px] h-[240px] max-w-[240px] max-h-[240px] px-11 py-14'
        }`}
      >
        <ImageIcon width={isProfile ? 30 : 60} height={isProfile ? 30 : 60} />
        <p className={`${isProfile ? 'text-caption1R' : 'text-body2R'} text-gray-500`}>
          이미지 등록하기
        </p>
      </button>
      <input
        type="file"
        multiple
        hidden
        ref={inputRef}
        onChange={isProfile ? handleAddProfileImages : handleAddImages}
      />
    </div>
  );
}

export default ImageUploader;
