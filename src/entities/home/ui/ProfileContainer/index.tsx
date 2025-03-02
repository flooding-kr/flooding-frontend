import Image from 'next/image';
import React from 'react';

import userProfileImage from '@/shared/assets/jpg/userProfileImage.jpg';

interface Props {
  src: string;
  stuName: string | undefined;
  stuNum: number | undefined;
}

export default function ProfileContainer({ src, stuName, stuNum }: Props) {
  return (
    <section className="flex flex-col justify-between px-12 py-9 rounded-lg bg-white mobile:hidden">
      <Image
        alt="프로필 사진"
        src={src || userProfileImage}
        className="w-[12.5rem] h-[12.5rem] rounded-full border-[1px] border-solid border-gray-200"
      />
      <div className="flex flex-col justify-center items-center">
        <p className="text-black text-title1M">{stuName}</p>
        <p className="text-gray-500 text-title3R">{stuNum}</p>
      </div>
    </section>
  );
}
