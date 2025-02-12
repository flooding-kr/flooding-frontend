import React from 'react';

import { HomebaseIcon } from '@/shared/assets/icons';

export default function SectionTitle() {
  return (
    <div className="flex place-items-center gap-5 mb-6">
      <div>
        <HomebaseIcon />
      </div>
      <p className="text-title3B">홈베이스</p>
    </div>
  );
}
