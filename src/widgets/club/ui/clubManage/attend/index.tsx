'use client';

import { useAttendStore } from '@/entities/club';
import { AttendType, StudentAttend } from '@/shared/types/attend';
import { Button } from '@/shared/ui';
import FilterButton from '@/shared/ui/FilterButton';

import ClubAttendList from './list';

const mockStudentAttend: Required<StudentAttend>[] = Array.from({ length: 20 }, (_, i) => ({
  id: (i + 1).toString(),
  status: ['PRESENT', 'ABSENT', 'UNMARKED'][i % 3] as AttendType,
  grade: (i % 3) + 1,
  classroom: (i % 4) + 1,
  number: (i % 30) + 1,
  name: `학생${i + 1}`,
  profile_image: {
    key: `img${i + 1}`,
    presigned_url: ``,
  },
}));

function ClubAttend() {
  const { studentIds } = useAttendStore();

  return (
    <div className="flex flex-col gap-6">
      <header className="w-full flex justify-between">
        <p className="text-black text-title3B">동아리 출석</p>
        <div className="flex gap-3">
          <div className="flex items-center gap-4">
            <p className="text-body3B text-gray-500">인원 {studentIds.length}명</p>
            <div className="w-[110px]">
              <Button
                text="변경하기"
                disabled={studentIds.length < 1}
                onClick={() => console.log(studentIds)}
                type="button"
              />
            </div>
          </div>
          {/* <FilterButton onClick={() => console.log('필터 모달')} /> */}
        </div>
      </header>
      <ClubAttendList students={mockStudentAttend} />
    </div>
  );
}

export default ClubAttend;
