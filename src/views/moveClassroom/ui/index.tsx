'use client';

import { useState } from 'react';

import { Search } from '@/shared/assets/icons';
import { Button, Input, SearchInput } from '@/shared/ui';
import CheckModal from '@/widgets/moveClassroom/checkModal';
import StayRoomSelectorModal from '@/widgets/moveClassroom/stayRoomSelectorModal';
import StudentSelectorModal from '@/widgets/moveClassroom/studentSelectorModal';

function MoveClassroomPage() {
  const [modal, setModal] = useState<string>('');

  return (
    <div className="flex justify-center pt-14 px-4">
      <div className="max-w-[1360px] w-full">
        <div className="flex flex-col gap-6">
          <header className="flex justify-between items-center">
            <p className="text-title3B text-black">교실 이동</p>
            <div className="flex items-center gap-9">
              <p className="text-body2R text-gray-500">시간</p>
              <div className="bg-white rounded-2xl flex gap-9">
                {['8교시', '9교시', '10교시', '11교시'].map(period => (
                  <button
                    key={period}
                    type="button"
                    className="px-5 py-[10px] rounded-[20px] text-caption1B text-main-600 disabled:text-white disabled:bg-main-600"
                    disabled={period === '8교시'}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          </header>
          <div className="bg-white rounded-2xl p-10">
            <form className="w-full flex flex-col items-center gap-[60px]">
              <label className="w-full flex flex-col gap-4">
                <span className="text-body2R text-black">
                  실 <span className="text-main-600">*</span>
                </span>
                <SearchInput placeholder="실을 검색해주세요" />
              </label>
              <label className="w-full flex flex-col gap-4">
                <span className="text-body2R text-black">
                  사유 <span className="text-main-600">*</span>
                </span>
                <Input placeholder="사유를 입력해주세요" bg maxLength={100} />
              </label>
              <div className="w-full flex flex-col gap-4">
                <p className="text-body2R text-black">인원 추가</p>
                <button
                  type="button"
                  onClick={() => setModal('student')}
                  className="relative w-full rounded-lg px-6 py-4 bg-gray-100 mobile:py-3 mobile:px-2 flex justify-between items-center text-body2R text-gray-500 mobile:text-body3R"
                >
                  인원 추가하기
                  <div className="w-9 h-9 mobile:w-6 mobile:h-6">
                    <Search />
                  </div>
                </button>
              </div>
              <div className="max-w-[450px] w-full">
                <Button type="button" text="완료" onClick={() => setModal('stayRoom')} />
              </div>
            </form>
          </div>
        </div>
      </div>
      {modal === 'student' && <StudentSelectorModal onClose={() => setModal('')} />}
      {modal === 'stayRoom' && (
        <StayRoomSelectorModal
          floor={2}
          reason=""
          period={8}
          room=""
          onClose={() => setModal('')}
          onConfirm={() => setModal('posted')}
        />
      )}
      {modal === 'posted' && <CheckModal onClose={() => setModal('')} />}
    </div>
  );
}

export default MoveClassroomPage;
