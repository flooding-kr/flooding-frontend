import React from 'react';

import { HeaderClub } from '@/shared/assets/icons';
import { ClubType } from '@/shared/types/club';
import { Button } from '@/shared/ui';
import postApply from '@/widgets/club/api/postApplicant';

interface Props {
  recruiting: boolean;
  applicant: number;
  type: ClubType;
  clubId: string;
}

const handleClubType = (type: ClubType) => {
  switch (type) {
    case 'AUTONOMOUS':
      return '자율동아리';
    case 'CAREER':
      return '취업동아리';
    case 'MAJOR':
      return '전공동아리';
    default:
      return '';
  }
};

function RecruitmentCard({ recruiting, applicant, type, clubId }: Props) {
  const clubApply = () => {
    postApply({ id: clubId });
  };

  return (
    <aside className="sticky top-[298px] w-[232px] h-fit bg-white rounded-lg px-4 py-6 self-start laptop:hidden">
      <div className="flex flex-col items-center gap-10 w-[200px]">
        <div className="border-[1px] border-main-600 border-solid rounded-lg flex justify-center items-center gap-3 px-3 py-2">
          <HeaderClub mobile isSelected />
          <p className="text-main-600 text-body3B">{handleClubType(type)}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-body1R text-gray-500">{applicant}명 지원</p>
          <p className={`text-title3B ${recruiting ? 'text-success' : 'text-error'}`}>
            {recruiting ? '모집 중' : '모집 마감'}
          </p>
        </div>
        <Button
          text="지원하기"
          disabled={!recruiting}
          type="button"
          onClick={() => {
            clubApply();
          }}
        />
      </div>
    </aside>
  );
}

export default RecruitmentCard;
