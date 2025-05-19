import { useEffect, useState } from 'react';

import { useAttendStore } from '@/entities/dormitory/store/useAttendStore';
import checkApply from '@/entities/home/model/checkApply';
import { Book, CheckBoxTrue } from '@/shared/assets/icons';
import useUser from '@/shared/hooks/useUser';
import { applyType } from '@/shared/types/home';
import { Button } from '@/shared/ui';
import { deleteSelfStudy } from '@/widgets/dormitory/api/deleteSelfStudy';
import useDispatchSelfStudy from '@/widgets/dormitory/model/useDispatchSelfStudy';

interface Props {
  count: number;
  maxCount: number;
  activationTime: string;
  available: applyType;
}

function SelfStudyFooter({ activationTime, available, count, maxCount }: Props) {
  const user = useUser();
  const { mutate: postSelfStudy } = useDispatchSelfStudy();
  const { attend, setAttend } = useAttendStore();
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  const dormitoryAdmin =
    user?.roles?.includes('ROLE_DORMITORY_COUNCIL') ||
    user?.roles?.includes('ROLE_DORMITORY_TEACHER');

  useEffect(() => {
    const interval = setInterval(() => {
      checkApply({ activationTime, available, count, maxCount, setIsActive, setText });
    }, 1000);

    return () => clearInterval(interval);
  }, [activationTime, available, count, maxCount]);
  return (
    <footer className={`flex flex-1 ${dormitoryAdmin ? 'justify-between' : 'justify-end'} w-full`}>
      {dormitoryAdmin && (
        <button
          type="button"
          onClick={() => setAttend(!attend)}
          className={`flex items-center p-3 rounded-lg gap-3 ${attend ? 'bg-main-600' : 'bg-transparent border-[1px] border-solid border-gray-400'} mobile:hidden`}
        >
          <div className="w-6 h-6">
            <CheckBoxTrue color={attend ? '#ffffff' : '#BDBDBD'} />
          </div>
          <p className={`text-body2R ${attend ? 'text-white' : 'text-gray-400'}`}>출석</p>
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
            disabled={!isActive}
            onClick={text === '신청 취소' ? () => deleteSelfStudy() : () => postSelfStudy()}
          />
        </div>
      </div>
    </footer>
  );
}

export default SelfStudyFooter;
