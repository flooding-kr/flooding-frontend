import Image from 'next/image';
import React from 'react';

import { useShowImage } from '@/entities/club';
import { Trash } from '@/shared/assets/icons';

interface Props {
  profileImage?: string;
  images?: string[];
}

function CreateClubPreviewImageList({ images, profileImage }: Props) {
  const { handleRemoveImage, handleRemoveProfileImage } = useShowImage();

  return (
    <div className="flex gap-6">
      {images?.map((item, index) => (
        <div
          key={item}
          className="relative rounded-lg overflow-hidden bg-white w-[240px] h-[240px] max-w-[240px] max-h-[240px] flex items-center justify-center"
        >
          <button
            type="button"
            onClick={() => handleRemoveImage(item)}
            className="absolute top-4 right-4 flex z-20 bg-white p-2 rounded-lg border-solid border-[1px] border-gray-200 cursor-pointer"
          >
            <div className="w-6 h-6">
              <Trash color="#CE2020" />
            </div>
          </button>
          <Image
            src={item}
            alt={`Uploaded Image ${index}`}
            className="rounded-lg flex z-10"
            style={{ objectFit: 'contain' }}
            fill
          />
        </div>
      ))}
      {profileImage && (
        <div className="relative rounded-lg overflow-hidden bg-white w-[152px] h-[152px] max-w-[152px] max-h-[152px] flex items-center justify-center">
          <button
            type="button"
            onClick={() => handleRemoveProfileImage()}
            className="absolute top-2 right-2 flex z-20 bg-white p-2 rounded-lg border-solid border-[1px] border-gray-200 cursor-pointer"
          >
            <div className="w-6 h-6">
              <Trash color="#CE2020" />
            </div>
          </button>
          <Image
            src={profileImage}
            alt="Uploaded Image"
            className="rounded-lg flex z-10"
            style={{ objectFit: 'contain' }}
            fill
          />
        </div>
      )}
    </div>
  );
}

export default CreateClubPreviewImageList;
