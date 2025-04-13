import React from 'react';

interface Props {
  state?: boolean;
}

function ClubState({ state }: Props) {
  return (
    <div className={`absolute w-fit rounded-lg px-5 py-2 bg-[#1EB916] ${state && 'hidden'}`}>
      <p className="text-caption1B text-white">모집</p>
    </div>
  );
}

export default ClubState;
