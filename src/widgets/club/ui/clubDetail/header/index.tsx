import Link from 'next/link';
import React, { useState } from 'react';

import { BigArrowLeft, KebabMenu } from '@/shared/assets/icons';

import DetailModal from './detailModal';

interface Props {
  name: string;
  id: string;
  isMember: boolean;
  isLeader: boolean;
}

function ClubDetailHeader({ name, id, isMember, isLeader }: Props) {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <header className="relative w-full flex justify-between">
      <div className="flex gap-10">
        <Link href="/club">
          <BigArrowLeft />
        </Link>
        <p className="text-title2M text-black">{name}</p>
      </div>
      {isMember ||
        (isLeader && (
          <div className="relative flex items-center">
            {modal && <DetailModal id={id} isLeader={isLeader} />}
            <button type="button" onClick={() => setModal(!modal)}>
              <KebabMenu />
            </button>
          </div>
        ))}
    </header>
  );
}

export default ClubDetailHeader;
