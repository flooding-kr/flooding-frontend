'use client';

import { on } from 'events';

import { StudentItem } from '@/entities/dormitory';
import { X } from '@/shared/assets/icons';
import userProfileImage from '@/shared/assets/jpg/userProfileImage.jpg';
import { DormitoryRankType } from '@/shared/types/dormitory';
import { Button, SearchInput } from '@/shared/ui';
import Portal from '@/shared/ui/Portal';
import StudentInfo from '@/shared/ui/StudentInfo';

interface Props {
  onClose: () => void;
}

export default function StudentSelectorModal({ onClose }: Props) {
  const students: DormitoryRankType[] = [];
  return (
    <Portal onClose={onClose}>
      <div className="bg-white max-w-[986px] max-h-[808px] p-7 flex flex-col gap-9 rounded-xl shadow-[0_0_20px_0_#00000033]">
        <div className="flex flex-col gap-6">
          <header className="flex justify-between items-center">
            <p className="text-body1B text-black">학생 선택</p>
            <button className="w-9 h-9" type="button" onClick={onClose}>
              <X />
            </button>
          </header>
          <SearchInput
            placeholder="학생 이름으로 검색"
            onChange={e => console.log(e.target.value)}
          />
          <div className="relative h-[420px] overflow-visible">
            <div className="h-full pr-2 overflow-auto custom-scrollbar hide-scrollbar-mobile">
              <div className="grid gap-x-7 gap-y-6 mobile:m-0 mobile:gap-x-[10px] mobile:gap-y-3 grid-cols-[repeat(auto-fill,minmax(120px,1fr))] mobile:grid-cols-[repeat(auto-fill,minmax(74px,1fr))]">
                {students?.map(item => (
                  <div key={item.student_number} className="relative overflow-visible">
                    <StudentItem
                      type="selfStudy"
                      id={item.id}
                      stuImg={item.profile_image?.presigned_url || userProfileImage.src}
                      stuName={item.name}
                      stuNum={item.student_number || item.school_number || ''}
                      attend={item?.is_present}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto hidden-scrollbar">
            <StudentInfo text="3308 민우석" onClick={() => console.log('Student info clicked')} />
            <StudentInfo text="3308 민우석" onClick={() => console.log('Student info clicked')} />
            <StudentInfo text="3308 민우석" onClick={() => console.log('Student info clicked')} />
            <StudentInfo text="3308 민우석" onClick={() => console.log('Student info clicked')} />
            <StudentInfo text="3308 민우석" onClick={() => console.log('Student info clicked')} />
            <StudentInfo text="3308 민우석" onClick={() => console.log('Student info clicked')} />
          </div>
        </div>
        <Button text="확인" type="button" onClick={() => console.log('Confirm selection')} />
      </div>
    </Portal>
  );
}
