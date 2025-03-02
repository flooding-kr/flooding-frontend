'use client';

import { useState } from 'react';

import { ArrowDown, ArrowUp } from '@/shared/assets/icons';
import { Tag } from '@/shared/ui';

interface Props {
  title: string;
  content: string;
  creationDate: string;
  tag: string;
}

export default function NotificationItem({ title, content, creationDate, tag }: Props) {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <article className="px-8 py-5 rounded-lg w-full max-w-[1360px] bg-white">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <header className="flex justify-between items-center w-full">
            <p className="text-body2B text-black">{title}</p>
            <p className="text-body3B text-gray-700">{creationDate}</p>
          </header>
          <p
            className="text-body3R text-gray-500 overflow-hidden text-ellipsis w-full break-words whitespace-break-spaces"
            style={{
              display: `${seeMore ? 'block' : '-webkit-box'}`,
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {content}
          </p>
        </div>
        <footer className="flex justify-between items-center w-full">
          <Tag text={tag} />
          <button
            type="button"
            className={`flex gap-2 text-body3B ${seeMore ? 'text-main-500' : 'text-gray-700'}`}
            onClick={() => setSeeMore(!seeMore)}
          >
            {seeMore ? <ArrowUp color="#7994F5" /> : <ArrowDown />}
            펼쳐보기
          </button>
        </footer>
      </div>
    </article>
  );
}
