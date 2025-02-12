import React from 'react';

import { useStore } from '@/entities/homebase/store/useStore';
import { InfoCircle } from '@/shared/assets/icons';
import { VerticalLineBig } from '@/shared/assets/svg';
import { FilterContainer } from '@/shared/ui';

export default function FilterSection() {
  const { setFloor, setClassTime } = useStore();

  return (
    <div className="flex justify-between w-full gap-10">
      <div className="flex gap-6 items-center w-full max-w-[800px] justify-between">
        <FilterContainer
          title="층수"
          options={['2층', '3층', '4층']}
          onChange={value => setFloor(value)}
        />
        <VerticalLineBig />
        <FilterContainer
          title="교시"
          options={['8교시', '9교시', '10교시', '11교시']}
          onChange={value => setClassTime(value)}
        />
      </div>
      <div className="w-full max-w-[439px] flex justify-end items-center gap-2">
        <InfoCircle />
        <p className="text-body3R text-gray-500">층, 교시 1개만 선택 가능</p>
      </div>
    </div>
  );
}
