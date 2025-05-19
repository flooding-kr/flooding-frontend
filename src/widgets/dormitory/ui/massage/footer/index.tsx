import { useEffect, useState } from 'react';

import checkApply from '@/entities/home/model/checkApply';
import { Error, Massage } from '@/shared/assets/icons';
import { Button } from '@/shared/ui';

interface Props {
  count: number;
  maxCount: number;
  activationTime: string;
  available: boolean;
}

function MassageFooter({ count, maxCount, activationTime, available }: Props) {
  const [click, setClick] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');

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
          <Button type="button" text={text} closed={text === '신청 불가'} disabled={!isActive} />
        </div>
      </div>
    </footer>
  );
}

export default MassageFooter;
