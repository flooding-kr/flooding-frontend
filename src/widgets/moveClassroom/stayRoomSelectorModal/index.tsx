'use client';

import { SchoolMap } from '@/entities/club';
import { X } from '@/shared/assets/icons';
import { VerticalLine } from '@/shared/assets/svg';
import { Button, Tag } from '@/shared/ui';
import Portal from '@/shared/ui/Portal';

interface Props {
  floor: number;
  reason: string;
  room?: string;
  period?: number;
  onClose: () => void;
  onConfirm: () => void;
}

export default function StayRoomSelectorModal({
  floor,
  reason,
  room,
  period,
  onClose,
  onConfirm,
}: Props) {
  return (
    <Portal onClose={onClose}>
      <div className="bg-white max-w-[1145px] max-h-[682px] w-full p-7 flex flex-col gap-9 rounded-2xl shadow-[0_0_20px_0_#00000033]">
        <div className="flex flex-col gap-6">
          <header className="flex justify-between items-center">
            <p className="text-body1B text-black">선택한 자리가 맞으신가요?</p>
            <button className="w-9 h-9" type="button" onClick={onClose}>
              <X />
            </button>
          </header>
          <div className="h-full flex flex-col gap-8 items-center">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-5">
                <p className="text-body2R text-gray-500">실</p>
                <p className="text-body2B text-main-600">{room}</p>
              </div>
              <VerticalLine />
              <div className="flex items-center gap-4">
                <p className="text-body2R text-gray-500">층수</p>
                {[2, 3, 4].map(num => (
                  <Tag key={num} text={`${num}층`} disabled={num === floor} />
                ))}
              </div>
              <VerticalLine />
              <div className="flex items-center gap-4">
                <p className="text-body2R text-gray-500">교시</p>
                {[8, 9, 10, 11].map(time => (
                  <Tag key={time} text={`${time}교시`} disabled={time === period} />
                ))}
              </div>
            </div>
            <div className="w-full flex items-center gap-4">
              <p className="w-[40px] text-body2R text-gray-500">사유</p>
              <div className="w-full h-full bg-gray-100 rounded-xl p-4">
                <p className="text-body2R text-black">{reason}</p>
              </div>
            </div>
            <div className="max-w-[1080px] w-full h-[320px] border border-solid border-gray-100 rounded-xl relative overflow-hidden">
              <SchoolMap building="MAIN_BUILDING" floor={floor} />
            </div>
          </div>
        </div>
        <Button text="확인" type="button" onClick={onConfirm} />
      </div>
    </Portal>
  );
}
