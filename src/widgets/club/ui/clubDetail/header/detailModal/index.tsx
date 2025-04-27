import Link from 'next/link';
import React from 'react';

interface Props {
  id: string;
}

function DetailModal({ id }: Props) {
  return (
    <div
      className="absolute right-6 bg-white flex flex-col gap-2 w-[186px] p-6 rounded-lg z-50"
      style={{ boxShadow: '0px 0px 20px 0px #00000033' }}
    >
      <div className="flex flex-col items-center gap-2 w-[138px]">
        <div className="py-6 px-3">
          <Link href={`/club/${id}/manage`} className="text-body2R text-black hover:text-body2B">
            동아리 관리
          </Link>
        </div>

        <div className="py-6 px-3">
          <Link href={`/club/${id}/edit`} className="text-body2R text-black hover:text-body2B">
            폼 수정하기
          </Link>
        </div>
        <div className="px-3 py-6">
          <Link href={`/club/${id}`} className="text-body2R text-black hover:text-body2B">
            수정하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
