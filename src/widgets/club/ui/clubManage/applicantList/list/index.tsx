import React from 'react';

import CheckMember from '@/entities/club/ui/checkMember';
import PendingMember from '@/entities/club/ui/pendingMember';
import userProfileImg from '@/shared/assets/jpg/userProfileImage.jpg';
import { StudentAttend } from '@/shared/types/attend';

interface Props {
  students: StudentAttend[];
}

function ClubApplicantList({ students }: Props) {
  return (
    <div className="w-full h-[380px] flex flex-wrap bg-white rounded-lg px-[22px] py-6 gap-x-4 gap-y-5 overflow-y-auto pr-2 mr-[-24px] custom-scrollbar">
      {students.map(item => (
        <PendingMember
          key={item.id}
          id={item.id}
          name={item.name}
          grade={item.grade}
          classroom={item.classroom}
          number={item.number}
          profileImg={item.profile_image.presigned_url || userProfileImg.src}
        />
      ))}
    </div>
  );
}

export default ClubApplicantList;
