import React from 'react';

import CheckMember from '@/entities/club/ui/checkMember';
import { StudentAttend } from '@/shared/types/attend';

interface Props {
  students: Required<StudentAttend>[];
}

function ClubAttendList({ students }: Props) {
  return (
    <div className="w-full h-[380px] flex flex-wrap bg-white rounded-lg px-[22px] py-6 gap-x-4 gap-y-5 overflow-y-auto pr-2 mr-[-24px] custom-scrollbar">
      {students.map(item => (
        <CheckMember
          key={item.id}
          id={item.id}
          name={item.name}
          grade={item.grade}
          classroom={item.classroom}
          number={item.number}
          profileImg={item.profile_image.presigned_url}
          status={item.status}
        />
      ))}
    </div>
  );
}

export default ClubAttendList;
