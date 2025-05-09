import Image from 'next/image';
import React from 'react';

import userProfileImage from '@/shared/assets/jpg/userProfileImage.jpg';

interface Props {
  type: 'selfStudy' | 'massage';
  stuNum: string;
  stuName: string;
  stuImg: string;
  rank?: number;
}

export default function StudentItem({ stuNum, stuName, stuImg, rank, type }: Props) {
  return (
    <div className="relative">
      {type === 'selfStudy' && (
        <>
          {rank === 1 && (
            <div className="absolute -right-5 -top-5 w-10 h-10 flex justify-center items-center bg-gold-gradient rounded-full">
              <p className="text-white text-body2B">1</p>
            </div>
          )}
          {rank === 2 && (
            <div className="absolute -right-5 -top-5 w-10 h-10 flex justify-center items-center bg-silver-gradient rounded-full">
              <p className="text-white text-body2B">2</p>
            </div>
          )}
          {rank === 3 && (
            <div className="absolute -right-5 -top-5 w-10 h-10 flex justify-center items-center bg-bronze-gradient rounded-full">
              <p className="text-white text-body2B">3</p>
            </div>
          )}
        </>
      )}
      <div className="w-[120px] h-[134px] flex justify-center items-center border-[1px] border-gray-200 border-solid rounded-lg">
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-12 h-12 rounded-full">
            <Image
              alt="profile"
              src={stuImg || userProfileImage}
              fill
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-body3R text-gray-500">{stuNum}</p>
            <p className="text-body2B text-black">{stuName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
