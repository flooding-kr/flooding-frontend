import React from 'react';

interface Props {
  state?: string;
}

function ClubState({ state }: Props) {
  let stateStyle = 'absolute w-fit rounded-lg px-5 py-2';

  switch (state) {
    case 'PENDING':
      stateStyle += ' bg-[#DCB800]';
      break;
    case 'RECRUITING':
      stateStyle += ' bg-[#1EB916]';
      break;
    default:
      stateStyle = 'hidden';
  }

  return (
    <div className={stateStyle}>
      <p className="text-caption1B text-white">{state === 'PENDING' ? '대기' : '모집'}</p>
    </div>
  );
}

export default ClubState;
