'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import { ApplyBoard } from '@/entities/home';
import { useNotifyStore } from '@/entities/home/store/useNotifyStore';
import { BigArrowRight, DormitoryIcon } from '@/shared/assets/icons';
import Portal from '@/shared/ui/Portal';
import useDeleteMassage from '@/widgets/dormitory/model/useDeleteMassage';
import useDeleteSelfStudy from '@/widgets/dormitory/model/useDeleteSelfStudy';
import useDispatchMassage from '@/widgets/dormitory/model/useDispatchMassage';
import useDispatchSelfStudy from '@/widgets/dormitory/model/useDispatchSelfStudy';

import { useFetchMassage } from '../../model/useFetchMassage';
import { useFetchSelfStudy } from '../../model/useFetchSelfStudy';
import MassageNotifyModal from '../massageNotifyModal';
import SelfStudyNotifyModal from '../selfStudyNotifyModal';

function DormitoryPanel() {
  const [isMobile, setIsMobile] = useState(false);
  const { type, modal, setModal } = useNotifyStore();
  const { mutate: postMassage } = useDispatchMassage();
  const { mutate: deleteMassage } = useDeleteMassage();
  const { mutate: postSelfStudy } = useDispatchSelfStudy();
  const { mutate: deleteSelfStudy } = useDeleteSelfStudy();
  const { selfStudy, fetchSelfStudy } = useFetchSelfStudy();
  const { massage, fetchMassage } = useFetchMassage();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  useEffect(() => {
    fetchSelfStudy();
    fetchMassage();
  }, []);

  return (
    <div className="w-full max-w-[1360px] flex flex-col gap-10 mobile:gap-4">
      <header className="flex justify-between items-center">
        <div className="flex gap-5 mobile:gap-2">
          <div className="w-10 h-10 mobile:w-6 mobile:h-6">
            <DormitoryIcon />
          </div>
          <p className="text-title3B text-black mobile:text-body2B">기숙사</p>
        </div>
        <Link href="/dormitory" className="flex items-center gap-5 mobile:gap-2">
          <p className="text-body1B text-gray-600 mobile:text-body3R">더보기</p>
          <BigArrowRight isMobile={isMobile} />
        </Link>
      </header>
      <div className="flex flex-1 gap-6 tablet:flex-col mobile:gap-4">
        <ApplyBoard
          title="자습 신청"
          count={selfStudy?.current_count ?? 0}
          maxCount={selfStudy?.limit ?? 0}
          activationTime="20:00"
          onClick={selfStudy?.status === 'APPLIED' ? () => deleteMassage() : () => postSelfStudy()}
          available={selfStudy?.status || 'IMPOSSIBLE'}
        />
        <ApplyBoard
          title="안마의자 신청"
          count={massage?.current_count ?? 0}
          maxCount={massage?.limit ?? 0}
          activationTime="20:20"
          onClick={massage?.status === 'APPLIED' ? () => deleteMassage() : () => postMassage()}
          available={massage?.status || 'IMPOSSIBLE'}
        />
      </div>
      {modal && (
        <Portal onClose={() => setModal(false)}>
          {type === '자습 신청' ? <SelfStudyNotifyModal /> : <MassageNotifyModal />}
        </Portal>
      )}
    </div>
  );
}

export default DormitoryPanel;
