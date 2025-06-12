'use client';

import Link from 'next/link';
import { useState } from 'react';

import { ApplyBoard } from '@/entities/home';
import { useNotifyStore } from '@/entities/home/store/useNotifyStore';
import { BigArrowRight, DormitoryIcon } from '@/shared/assets/icons';
import CancelModal from '@/shared/ui/CancelModal';
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
  const [cancelMassage, setCancelMassage] = useState(false);
  const [cancelSelfStudy, setCancelSelfStudy] = useState(false);
  const { type, modal, setModal } = useNotifyStore();
  const { mutate: postMassage } = useDispatchMassage();
  const { mutate: deleteMassage } = useDeleteMassage();
  const { mutate: postSelfStudy } = useDispatchSelfStudy();
  const { mutate: deleteSelfStudy } = useDeleteSelfStudy();
  const selfStudy = useFetchSelfStudy();
  const massage = useFetchMassage();

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
          <div className="w-6 h-6 mobile:w-4 mobile:h-4">
            <BigArrowRight />
          </div>
        </Link>
      </header>
      <div className="flex flex-1 gap-6 laptop:flex-col mobile:gap-4">
        <ApplyBoard
          title="자습 신청"
          count={selfStudy?.current_count ?? 0}
          maxCount={selfStudy?.limit ?? 0}
          activationTime="20:00"
          onClick={
            selfStudy?.status === 'APPLIED' ? () => setCancelSelfStudy(true) : () => postSelfStudy()
          }
          available={selfStudy?.status || 'IMPOSSIBLE'}
        />
        <ApplyBoard
          title="안마의자 신청"
          count={massage?.current_count ?? 0}
          maxCount={massage?.limit ?? 0}
          activationTime="20:20"
          onClick={
            massage?.status === 'APPLIED' ? () => setCancelMassage(true) : () => postMassage()
          }
          available={massage?.status || 'IMPOSSIBLE'}
        />
      </div>
      {modal && (
        <Portal onClose={() => setModal(false)}>
          {type === '자습 신청' ? <SelfStudyNotifyModal /> : <MassageNotifyModal />}
        </Portal>
      )}
      {cancelMassage && (
        <CancelModal
          checkText="신청 취소"
          description={
            '정말로 안마의자를 취소하시겠습니까?\n 안마의자 취소 후에는 재신청이 불가능합니다.'
          }
          onClick={() => {
            setCancelMassage(false);
            deleteMassage();
          }}
          onClose={() => setCancelMassage(false)}
          title="안마의자 신청 취소"
        />
      )}
      {cancelSelfStudy && (
        <CancelModal
          checkText="신청 취소"
          description={'정말로 자습을 취소하시겠습니까?\n 자습 취소 후에는 재신청이 불가능합니다.'}
          onClick={() => {
            setCancelSelfStudy(false);
            deleteSelfStudy();
          }}
          onClose={() => setCancelSelfStudy(false)}
          title="자습 신청 취소"
        />
      )}
    </div>
  );
}

export default DormitoryPanel;
