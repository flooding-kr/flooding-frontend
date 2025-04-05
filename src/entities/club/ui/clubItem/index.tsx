import Image from 'next/image';
import React from 'react';

import ClubState from '../clubState';

interface Props {
  name: string;
  image: string;
  state?: string;
}

function ClubItem({ image, name, state }: Props) {
  return (
    <section className="max-w-[252px] h-[300px] w-full bg-white rounded-lg px-4 py-5">
      <div className="relative flex flex-col gap-4">
        <ClubState state={state} />
        <Image
          alt={name}
          src={image}
          width={220}
          height={220}
          className="w-[220px] h-[220px] border-[1px] border-solid border-gray-200 rounded-lg"
        />
        <p className="flex justify-center text-black text-body2B">{name}</p>
      </div>
    </section>
  );
}

export default ClubItem;
