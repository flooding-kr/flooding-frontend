import { useEffect, useState } from 'react';

import checkApply from '@/entities/home/model/checkApply';
import { Error, Massage } from '@/shared/assets/icons';
import { applyType } from '@/shared/types/home';
import { Button } from '@/shared/ui';
import { deleteMassage } from '@/widgets/dormitory/api/deleteMassage';
import useDispatchMassage from '@/widgets/dormitory/model/useDispatchMassage';

interface Props {
  count: number;
  maxCount: number;
  activationTime: string;
  available: applyType;
}

function MassageFooter({ count, maxCount, activationTime, available }: Props) {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  const { mutate } = useDispatchMassage();

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
            disabled={!isActive}
            onClick={text === '신청 취소' ? () => deleteMassage() : () => mutate()}
          />
        </div>
      </div>
    </footer>
  );
}

export default MassageFooter;
