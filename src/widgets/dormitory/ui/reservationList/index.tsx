import { useEffect } from 'react';

import StudentItem from '@/entities/dormitory/ui/StudentItem';
import { Error } from '@/shared/assets/icons';
import userProfileImage from '@/shared/assets/jpg/userProfileImage.jpg';
import { MassageType } from '@/shared/types/dormitory';

interface Props {
  type: 'selfStudy' | 'massage';
  data: MassageType[];
}

function ReservationList({ type, data }: Props) {
  const isSelfStudy = type === 'selfStudy';
  const hasData = data?.length > 0;

  const containerClass = isSelfStudy
    ? 'grid gap-x-7 gap-y-6 mt-6 mobile:m-0 mobile:gap-x-[10px] mobile:gap-y-3 grid-cols-[repeat(auto-fill,minmax(120px,1fr))] mobile:grid-cols-[repeat(auto-fill,minmax(74px,1fr))]'
    : 'flex gap-x-4 mt-6 mobile:mt-0';

  const itemClass = isSelfStudy
    ? 'relative overflow-visible'
    : 'shrink-0 w-[120px] mobile:w-[74px]';

  return (
    <div
      className={`w-[1360px] bg-white px-7 pb-6 rounded-lg tablet:w-full mobile:px-2 mobile:py-3
        ${type === 'selfStudy' ? 'h-[498px] mobile:h-[264px]' : 'h-[182px] mobile:h-[152px]'}`}
    >
      <div className="relative h-full overflow-visible">
        <div
          className={`h-full pr-2 custom-scrollbar hide-scrollbar-mobile mobile:p-0
            ${type === 'selfStudy' ? 'overflow-y-auto' : 'overflow-x-auto'}`}
        >
          {hasData ? (
            <div className={containerClass}>
              {data.map((item, idx) => (
                <div key={item.student_number} className={itemClass}>
                  <StudentItem
                    type={type}
                    id={item.id}
                    stuImg={item.profile_image?.presigned_url || userProfileImage.src}
                    stuName={item.name}
                    stuNum={item.student_number || item.school_number || ''}
                    rank={idx + 1}
                    attend={item?.is_present}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex justify-center items-center gap-4">
                <div className="w-9 h-9 mobile:w-6 mobile:h-6">
                  <Error color="#A7A7A7" />
                </div>
                <p className="text-body1R text-gray-500 mobile:text-body2R">신청자가 없습니다.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ReservationList;
