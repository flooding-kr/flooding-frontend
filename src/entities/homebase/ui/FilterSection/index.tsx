import React from 'react';

import { useStore } from '@/entities/homebase/store/useStore';
import { InfoCircle } from '@/shared/assets/icons';
import { VerticalLineBig } from '@/shared/assets/svg';
import { FilterContainer } from '@/shared/ui';

export default function FilterSection() {
  const { setFloor, setPeriod, setSelectedTable } = useStore();

  return (
    <div className="flex justify-between w-full gap-10 ">
      <div className="flex gap-6 items-center w-full max-w-[800px] justify-between homebaseResponsive:w-max mobile:flex-col mobile:gap-3 mobile:place-items-start">
        <FilterContainer
          title="층수"
          options={[2, 3, 4]}
          unit="층"
          onChange={value => {
            setFloor(value);
            setSelectedTable(null);
          }}
        />
        <div className="homebaseResponsive:hidden">
          <VerticalLineBig />
        </div>
        <FilterContainer
          title="교시"
          options={[8, 9, 10, 11]}
          unit="교시"
          onChange={value => {
            setPeriod(value);
            setSelectedTable(null);
          }}
        />
      </div>
      <div className="w-full max-w-[439px] flex justify-end items-center gap-2 homebaseResponsive:hidden">
        <InfoCircle />
        <p className="text-body3R text-gray-500">층, 교시 1개만 선택 가능</p>
      </div>
    </div>
  );
}
