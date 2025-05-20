'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { LogoutLogo, MoreVert } from '@/shared/assets/svg';

interface Props {
  stuName: string | undefined;
  stuNum: number | undefined;
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const getGeneration = (grade: number, currentYear = new Date().getFullYear()): number => {
  const entranceYear = currentYear - grade + 2;
  return entranceYear - 2017;
};

export default function MypageProfileInfo({ stuName, stuNum, setProfile }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const userInfoList = [
    { label: '기수', value: `${getGeneration(Number(String(stuNum)[0]))}기` },
    { label: '이름', value: stuName },
    { label: '학번', value: stuNum },
  ];
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/auth/logout');
      console.log(response.data.message);
      router.push('/signin');
      toast.success('로그아웃 되었습니다.');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-start gap-4 max-w-full">
        {userInfoList.map(({ label, value }) => (
          <div key={label} className="flex place-content-center items-center gap-6 mobile:gap-3">
            <p className="text-body1R text-gray-800 mobile:text-body2R">{label}</p>
            <p className="text-black text-title3B mobile:text-body3B">{value}</p>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-9 right-12 cursor-pointer"
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="메뉴 열기"
      >
        <MoreVert />
      </button>

      {menuOpen && (
        <div className="absolute top-[77px] right-12 text-body2R text-gray-500 p-6 shadow-[0_0_20px_0_#00000033] rounded-lg bg-white">
          {/* <button
            type="button"
            className="w-full text-left px-6 py-3 cursor-pointer"
            onClick={() => {
              setProfile(true);
              setMenuOpen(false);
            }}
          >
            프로필 수정
          </button> */}
          <button
            type="button"
            className="flex gap-2 px-6 py-3 cursor-pointer"
            onClick={handleLogout}
          >
            <LogoutLogo />
            로그아웃
          </button>
        </div>
      )}
    </>
  );
}
