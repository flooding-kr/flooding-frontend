'use client';

import React, { useRef } from 'react';

import { ImageIcon } from '@/shared/assets/icons';
import { showError } from '@/shared/libs/showError';

import { useShowImage } from '../../model';

interface Props {
  isProfile?: boolean;
}

function ImageUploader({ isProfile }: Props) {
  const { handleAddImages, handleAddProfileImages } = useShowImage();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDivClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    const maxSize = 20 * 1024 * 1024; // 20MB

    const filteredFiles = Array.from(files).filter(file => {
      if (!validTypes.includes(file.type)) {
        showError(`허용되지 않는 파일 형식입니다: ${file.name}`);
        return false;
      }
      if (file.size > maxSize) {
        showError(`파일 크기가 20MB를 초과합니다: ${file.name}`);
        return false;
      }
      return true;
    });

    if (filteredFiles.length > 4) {
      showError('이미지는 최대 4개까지 업로드할 수 있습니다.');
      return;
    }

    if (isProfile && filteredFiles.length > 1) {
      showError('프로필 이미지는 1개만만 업로드할 수 있습니다.');
      return;
    }

    if (isProfile) {
      handleAddProfileImages(e);
    } else {
      handleAddImages(e);
    }
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
        accept=".jpg,.jpeg,.png"
        ref={inputRef}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default ImageUploader;
