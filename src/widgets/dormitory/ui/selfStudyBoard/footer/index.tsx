import { useState } from 'react';

import { Book, Error } from '@/shared/assets/icons';
import { Button } from '@/shared/ui';

function SelfStudyFooter() {
  const [click, setClick] = useState(false);
  const role = 'admin';
  const count = 0;
  const maxCount = 50;

  return (
    <footer
      className={`flex flex-1 ${role === 'admin' ? 'justify-between' : 'justify-end'} w-full`}
    >
      {role === 'admin' && (
        <button
          type="button"
          onClick={() => setClick(!click)}
          className={`flex items-center p-3 rounded-lg gap-3 ${click ? 'bg-error' : 'bg-transparent border-[1px] border-solid border-gray-400'} mobile:hidden`}
        >
          <div className="w-6 h-6">
            <Error color={click ? '#ffffff' : '#BDBDBD'} />
          </div>
          <p className={`text-body2R ${click ? 'text-white' : 'text-gray-400'}`}>금지</p>
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
          <Button type="button" text="신청하기" closed={count >= maxCount} />
        </div>
      </div>
    </footer>
  );
}

export default SelfStudyFooter;
