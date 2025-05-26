import { useEffect, useState } from 'react';

import checkApply from '@/entities/home/model/checkApply';
import { Massage } from '@/shared/assets/icons';
import { ApplyType } from '@/shared/types/home';
import { Button } from '@/shared/ui';
import useDeleteMassage from '@/widgets/dormitory/model/useDeleteMassage';
import useDispatchMassage from '@/widgets/dormitory/model/useDispatchMassage';

interface Props {
  count: number;
  maxCount: number;
  activationTime: string;
  available: ApplyType;
}

function MassageFooter({ count, maxCount, activationTime, available }: Props) {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  const { mutate: postMassage, isPending: postPending } = useDispatchMassage();
  const { mutate: deleteMassage, isPending: deletePending } = useDeleteMassage();

  useEffect(() => {
    const interval = setInterval(() => {
      checkApply({ activationTime, available, count, maxCount, setIsActive, setText });
    }, 1000);

    return () => clearInterval(interval);
  }, [activationTime, available, count, maxCount]);

  return (
    <footer className="flex flex-1 justify-end w-full">
      <div className="flex items-center gap-10 mobile:gap-6 mobile:w-full">
        <div className="flex items-center gap-4 mobile:gap-3">
          <div className="w-9 h-9 mobile:w-6 mobile:h-6">
            <Massage />
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
            disabled={!isActive || deletePending || postPending}
            onClick={text === '신청 취소' ? () => deleteMassage() : () => postMassage()}
          />
        </div>
      </div>
    </footer>
  );
}

export default MassageFooter;
