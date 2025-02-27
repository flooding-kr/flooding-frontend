import React, { Suspense } from 'react';

import { Verify } from '@/entities/verify';

export default function VerifyContainer() {
  return (
    <Suspense>
      <div className="w-full text-center max-w-[666px] px-4">
        <Verify />
      </div>
    </Suspense>
  );
}
