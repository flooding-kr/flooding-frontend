import Image from 'next/image';
import React from 'react';

interface Props {
  profile: string;
  name: string;
  number?: string;
  isTeacher?: boolean;
  isLeader?: boolean;
}

function ClubMember({ name, profile, number, isLeader, isTeacher }: Props) {
  return (
    <div className="px-4 py-3 rounded-lg bg-white">
      <div className="flex items-center gap-4">
        <Image
          src={profile}
          alt={name}
          width={48}
          height={48}
          className="rounded-full border-solid border-[1px] border-gray-200"
        />
        <div className="flex justify-center items-center gap-2">
          {!isLeader && !isTeacher && <p className="text-body3R text-gray-500">{number}</p>}
          <p className="text-body2B text-black">{name}</p>
          {(isLeader || isTeacher) && (
            <p className="text-body3R text-main-600">{isLeader ? '부장' : '선생님'}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClubMember;
