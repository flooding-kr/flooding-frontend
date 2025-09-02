'use client';

import { useEffect, useState } from 'react';

import { postClose } from '@/widgets/club/api/postClose';
import { postOpen } from '@/widgets/club/api/postOpen';

import ClubApplicantList from './list';

const mockStudentAttend = Array.from({ length: 20 }, (_, i) => ({
  id: (i + 1).toString(),
  grade: (i % 3) + 1,
  classroom: (i % 4) + 1,
  number: (i % 30) + 1,
  name: `학생${i + 1}`,
  profile_image: {
    key: `img${i + 1}`,
    presigned_url: ``,
  },
}));

function ClubApplicant() {
  const [active, setActive] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (active) {
      postClose({ id: '1' });
    } else {
      postOpen({ id: '1' });
    }
  }, [active]);
  return (
    <div className="flex flex-col gap-6">
      <header className="w-full flex justify-between">
        <p className="text-black text-title3B">동아리 가입 신청</p>
        <div className="flex gap-6">
          <div className="flex items-center gap-[11px]">
            <p
              className={`text-body2B transition-all ease-out duration-200 ${active ? 'text-main-600' : 'text-gray-400'}`}
            >
              모집 활성화
            </p>
            <button
              type="button"
              onClick={() => setActive(!active)}
              value={active ? 'on' : 'off'}
              className={`relative w-[52px] h-6 border-[2px] rounded-full border-solid ${active ? 'border-main-600' : 'border-gray-400'}`}
            >
              <div
                className={`absolute w-6 h-6 rounded-full -top-[2px] transition-all ease-out duration-200 ${active ? 'bg-main-600 left-[27px]' : '-left-[2px] bg-gray-400'}`}
              />
            </button>
          </div>
          {/* <button
            type="button"
            onClick={() => setModal(!modal)}
            className={`p-3 rounded-lg text-body3R flex gap-3 border border-solid ${
              modal ? 'border-main-600 bg-main-600 text-white' : 'border-main-600 text-main-600'
            }`}
          >
            초대하기
            <AddButton color={modal ? '#ffffff' : '#5E7EF3'} />
          </button> */}
        </div>
      </header>
      <ClubApplicantList students={mockStudentAttend} />
    </div>
  );
}

export default ClubApplicant;
