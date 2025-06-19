import { useEffect, useState } from 'react';

import { useCheckStore } from '@/entities/dormitory/store/useAttendStore';
import checkApply from '@/entities/home/model/checkApply';
import { Book, CheckBoxTrue } from '@/shared/assets/icons';
import useUser from '@/shared/hooks/useUser';
import { ApplyType } from '@/shared/types/home';
import { Button } from '@/shared/ui';
import CancelModal from '@/shared/ui/CancelModal';
import useDeleteSelfStudy from '@/widgets/dormitory/model/useDeleteSelfStudy';
import useDispatchSelfStudy from '@/widgets/dormitory/model/useDispatchSelfStudy';

interface Props {
  count: number;
  maxCount: number;
  activationTime: string;
  available: ApplyType;
}

function SelfStudyFooter({ activationTime, available, count, maxCount }: Props) {
  const user = useUser();
  const { mutate: postSelfStudy, isPending: postPending } = useDispatchSelfStudy();
  const { mutate: deleteSelfStudy, isPending: deletePending } = useDeleteSelfStudy();
  const { check, setCheck } = useCheckStore();
  const [isTimeActive, setIsTimeActive] = useState(false);
  const [isCountFull, setIsCountFull] = useState(false);
  const [text, setText] = useState('');
  const [modal, setModal] = useState(false);
  const dormitoryAdmin =
    user?.roles?.includes('ROLE_DORMITORY_COUNCIL') ||
    user?.roles?.includes('ROLE_DORMITORY_TEACHER');

  const onConfirm = () => {
    deleteSelfStudy();
    setModal(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkApply({
        activationTime,
        available,
        count,
        maxCount,
        setIsTimeActive,
        setIsCountFull,
        setText,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activationTime, available, count, maxCount]);
  return (
    <footer className={`flex flex-1 ${dormitoryAdmin ? 'justify-between' : 'justify-end'} w-full`}>
      {dormitoryAdmin && (
        <button
          type="button"
          onClick={() => setCheck(!check)}
          className={`flex items-center p-3 rounded-lg gap-3 ${check ? 'bg-main-600' : 'bg-transparent border-[1px] border-solid border-gray-400'} mobile:hidden`}
        >
          <div className="w-6 h-6">
            <CheckBoxTrue color={check ? '#ffffff' : '#BDBDBD'} />
          </div>
          <p className={`text-body2R ${check ? 'text-white' : 'text-gray-400'}`}>출석</p>
        </button>
      )}
      <div className="flex items-center gap-10 mobile:gap-6 mobile:w-full">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 mobile:w-6 mobile:h-6">
            <Book />
          </div>
          <p className="text-title3B text-black mobile:text-body3B">
            {count}/{maxCount}
          </p>
        </div>
        <div className="w-[422px] mobile:w-full">
          <Button
            type="button"
            text={text}
            closed={text === '신청 불가'}
            disabled={
              !isTimeActive || (text !== '신청 취소' && isCountFull) || deletePending || postPending
            }
            onClick={text === '신청 취소' ? () => setModal(true) : () => postSelfStudy()}
          />
        </div>
      </div>
      {modal && (
        <CancelModal
          checkText="신청 취소"
          description={'정말로 자습을 취소하시겠습니까?\n 자습 취소 후에는 재신청이 불가능합니다.'}
          onClick={onConfirm}
          onClose={() => setModal(false)}
          title="자습 신청 취소"
        />
      )}
    </footer>
  );
}

export default SelfStudyFooter;
