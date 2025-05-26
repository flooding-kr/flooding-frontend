import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { Check } from '@/shared/assets/icons';
import userProfileImage from '@/shared/assets/jpg/userProfileImage.jpg';
import useUser from '@/shared/hooks/useUser';

import useAbsenceReservation from '../../model/useAbsenceReservation';
import useAttendReservation from '../../model/useAttendReservation';
import { useCheckStore } from '../../store/useAttendStore';

interface Props {
  id: string;
  type: 'selfStudy' | 'massage';
  stuNum: string;
  stuName: string;
  stuImg: string;
  rank?: number;
  attend?: boolean;
}

export default function StudentItem({ id, stuNum, stuName, stuImg, rank, type, attend }: Props) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAttend, setIsAttend] = useState(false);
  const { check } = useCheckStore();
  const user = useUser();
  const { mutate: attendReservation } = useAttendReservation({ id });
  const { mutate: absenceReservation } = useAbsenceReservation({ id });

  const checkAdmin = () => {
    if (isAdmin && check) {
      if (!isAttend) {
        attendReservation();
        setIsAttend(true);
      } else {
        absenceReservation();
        setIsAttend(false);
      }
    }
  };

  useEffect(() => {
    if (
      user?.roles?.includes('ROLE_DORMITORY_TEACHER') ||
      user?.roles?.includes('ROLE_DORMITORY_COUNCIL')
    ) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    setIsAttend(attend ?? false);
  }, []);
  return (
    <button
      type="button"
      onClick={() => checkAdmin()}
      className={`relative flex justify-center ${!isAdmin && 'cursor-default'}`}
    >
      {type === 'selfStudy' && (
        <>
          {rank === 1 && (
            <div className="absolute -right-5 -top-5 w-10 h-10 flex justify-center items-center bg-gold-gradient rounded-full z-10 mobile:hidden">
              <p className="text-white text-body2B">1</p>
            </div>
          )}

          {rank === 2 && (
            <div className="absolute -right-5 -top-5 w-10 h-10 flex justify-center items-center bg-silver-gradient rounded-full mobile:hidden">
              <p className="text-white text-body2B">2</p>
            </div>
          )}
          {rank === 3 && (
            <div className="absolute -right-5 -top-5 w-10 h-10 flex justify-center items-center bg-bronze-gradient rounded-full mobile:hidden">
              <p className="text-white text-body2B">3</p>
            </div>
          )}
        </>
      )}
      <div className="w-[120px] h-[134px] flex justify-center items-center border-[1px] border-gray-200 border-solid rounded-lg mobile:w-fit mobile:h-fit mobile:px-[15px] mobile:py-3">
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-12 h-12 rounded-full mobile:w-9 mobile:h-9">
            {isAdmin && isAttend && (
              <div className="absolute w-full h-full flex justify-center items-center z-10 bg-[#12121266] rounded-full">
                <Check />
              </div>
            )}
            <Image
              alt="profile"
              src={stuImg || userProfileImage}
              fill
              className="w-12 h-12 rounded-full border border-solid border-gray-100 flex justify-center items-center z-0 mobile:w-9 mobile:h-9"
            />
          </div>
          <div className="flex flex-col items-center gap-1 mobile:w-11">
            <p className="text-body3R text-gray-500 mobile:text-caption2M">{stuNum}</p>
            <p className="text-body2B text-black mobile:text-caption1B">{stuName}</p>
          </div>
        </div>
      </div>
    </button>
  );
}
