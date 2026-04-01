'use client';

import { useRouter } from 'next/navigation';

import { Check } from '@/shared/assets/icons';
import { Button } from '@/shared/ui';
import Portal from '@/shared/ui/Portal';

interface Props {
  onClose: () => void;
}

export default function CheckModal({ onClose }: Props) {
  const router = useRouter();

  return (
    <Portal onClose={onClose}>
      <div className="max-w-[462px] bg-white px-7 py-9 flex flex-col gap-5 rounded-2xl shadow-[0_0_20px_0_#00000033]">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-9 items-center">
            <div className="flex justify-center items-center w-48 h-48 bg-main-100 rounded-full">
              <Check width={120} height={120} fill="#5E7EF3" />
            </div>
            <div className="flex flex-col gap-4 items-center">
              <p className="text-title3B text-black">교실 이동이 확인되었습니다.</p>
              <p className="text-body2R text-gray-500">@@@에서 확인하세요.</p>
            </div>
          </div>
          <Button
            text="확인"
            type="button"
            onClick={() => {
              router.push('/attendance');
            }}
          />
        </div>
      </div>
    </Portal>
  );
}
