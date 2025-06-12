'use client';

import HomeBasePageWrapper from '@/widgets/homebase/ui/HomeBasePageWrapper';

export default function HomeBase() {
  return (
    <div className="h-[calc(100vh-167px)] content-center justify-items-center overflow-y-auto laptop:p-4">
      <HomeBasePageWrapper />
    </div>
  );
}
