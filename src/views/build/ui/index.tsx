import React from 'react';

import Tool from '@/shared/assets/icons/Tool';

function Build() {
  return (
    <div
      style={{ width: 'calc(100dvw-(100dvw-100%))', height: 'calc(100dvh - 180px)' }}
      className="flex justify-center items-center"
    >
      <div className="flex flex-col items-center justify-center gap-[72px]">
        <Tool />
        <p className="text-title1M text-main-600">현재 개발중입니다...</p>
      </div>
    </div>
  );
}

export default Build;
