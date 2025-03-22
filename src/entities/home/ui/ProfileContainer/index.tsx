import Image from 'next/image';
import React, { useState } from 'react';

import userProfileImage from '@/shared/assets/jpg/userProfileImage.jpg';

import EditProfileModal from '../EditProfileModal';

interface Props {
  src: string;
  stuName: string | undefined;
  stuNum: number | undefined;
}

export default function ProfileContainer({ src, stuName, stuNum }: Props) {
  const [profile, setProfile] = useState(false);

  return (
    <>
      <section className="flex flex-col justify-between px-12 py-9 rounded-lg bg-white tablet:hidden">
        <div
          className="relative flex justify-center"
          role="button"
          tabIndex={0}
          onClick={() => setProfile(true)}
          onKeyDown={() => setProfile(true)}
        >
          <div className="absolute flex justify-center items-center w-[12.5rem] h-[12.5rem] rounded-full opacity-0 duration-200 hover:opacity-100">
            <div className="w-[12.5rem] h-[12.5rem] rounded-full bg-black opacity-40" />
            <p className="absolute flex text-white text-body1B z-50 opacity-100">프로필 수정</p>
          </div>
          <Image
            alt="프로필 사진"
            src={src || userProfileImage}
            className="w-[12.5rem] h-[12.5rem] rounded-full border-[1px] border-solid border-gray-200"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-black text-title1M">{stuName}</p>
          <p className="text-gray-500 text-title3R">{stuNum}</p>
        </div>
      </section>
      {profile && <EditProfileModal src="" onClose={() => setProfile(false)} />}
    </>
  );
}
