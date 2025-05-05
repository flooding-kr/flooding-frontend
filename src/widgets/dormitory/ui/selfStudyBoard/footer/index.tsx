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
          className={`flex items-center p-3 rounded-lg gap-3 ${click ? 'bg-error' : 'bg-transparent border-[1px] border-solid border-gray-400'}`}
        >
          <Error color={click ? '#ffffff' : '#BDBDBD'} />
          <p className={`text-body2R ${click ? 'text-white' : 'text-gray-400'}`}>금지</p>
        </button>
      )}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-4">
          <Book size={36} />
          <p className="text-title3B text-black">
            {count}/{maxCount}
          </p>
        </div>
        <div className="w-[422px]">
          <Button type="button" text="신청하기" closed={count >= maxCount} />
        </div>
      </div>
    </footer>
  );
}

export default SelfStudyFooter;
