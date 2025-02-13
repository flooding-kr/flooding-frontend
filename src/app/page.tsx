'use client';

import ApplyBoard from '@/entities/home/ui/ApplyBoard';

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <ApplyBoard count={50} maxCount={50} title="자습 신청" activationTime="20:00" />
      <ApplyBoard count={3} maxCount={5} title="안마의자 신청" activationTime="20:20" />
    </div>
  );
}
