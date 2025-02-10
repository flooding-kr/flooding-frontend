import Image from 'next/image';
import React from 'react';

import userProfileImage from '@/shared/assets/jpg/userProfileImage.jpg';

interface Props {
  stuNum: number;
  stuName: string;
  stuImg: string;
}

export default function StudentItem({ stuNum, stuName, stuImg }: Props) {
  return (
    <div className="w-[120px] h-[134px] flex justify-center items-center border-[1px] border-gray-200 border-solid rounded-lg">
      <div className="flex flex-col items-center gap-3">
        <Image
          alt="profile"
          src={stuImg ?? userProfileImage}
          className="w-12 h-12 rounded-full flex"
        />
        <div className="flex flex-col items-center gap-1">
          <p className="text-body3R text-gray-500">{stuNum}</p>
          <p className="text-body2B text-black">{stuName}</p>
        </div>
      </div>
    </div>
  );
}
