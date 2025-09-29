import Link from 'next/link';

import { deleteMember } from '@/widgets/club/api/deleteMember';
import useDeleteClub from '@/widgets/club/model/useDeleteClub';

interface Props {
  id: string;
  isLeader: boolean;
}

function DetailModal({ id, isLeader }: Props) {
  const { mutate: deleteClub } = useDeleteClub();

  return (
    <div
      className="absolute top-10 right-0 bg-white flex flex-col gap-2 w-[186px] p-6 rounded-lg z-50"
      style={{ boxShadow: '0px 0px 20px 0px #00000033' }}
    >
      <div className="flex flex-col items-center gap-2 w-[138px]">
        {isLeader ? (
          <>
            <div className="py-6 px-3">
              <Link
                href={`/club/${id}/manage`}
                className="text-body2R text-black hover:text-body2B"
              >
                동아리 관리
              </Link>
            </div>
            <div className="py-6 px-3">
              <Link href={`/club/${id}/edit`} className="text-body2R text-black hover:text-body2B">
                폼 수정
              </Link>
            </div>
            <div className="px-3 py-6">
              <button
                type="button"
                onClick={() => deleteClub({ id })}
                className="text-body2R text-error hover:text-body2B"
              >
                동아리 삭제
              </button>
            </div>
          </>
        ) : (
          <div className="px-3 py-6">
            <button
              type="button"
              onClick={() => deleteMember({ id })}
              className="text-body2R text-error hover:text-body2B"
            >
              동아리 탈퇴
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailModal;
