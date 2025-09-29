'use client';

import Image from 'next/image';

interface Props {
  id: string;
  name: string;
  grade: number;
  classroom: number;
  number: number;
  profileImg: string;
}

function PendingMember({ id, name, classroom, grade, number, profileImg }: Props) {
  return (
    <div className="max-w-[317px] w-full h-[68px] flex justify-between p-4 rounded-lg bg-gray-100">
      <div className="flex items-center gap-4">
        <Image src={profileImg} alt={name} width={36} height={36} className="rounded-full" />
        <div className="flex justify-center items-center gap-2">
          <p className="text-body3R text-gray-500">
            {grade}
            {classroom}
            {number.toString().padStart(2, '0')}
          </p>
          <p className="text-body2B text-black">{name}</p>
        </div>
      </div>
      <div className="flex items-center gap-5 text-body3B">
        <button
          type="button"
          className="text-gray-400 text-body3B hover:text-error"
          onClick={() => console.log('거절')}
        >
          거절
        </button>
        <div className="h-6 border-l-[1px] border-solid border-gray-400" />
        <button
          type="button"
          className="text-gray-400 text-body3B hover:text-success"
          onClick={() => console.log('승인')}
        >
          승인
        </button>
      </div>
    </div>
  );
}

export default PendingMember;
