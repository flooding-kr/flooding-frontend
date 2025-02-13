import React from 'react';

import { Table, FilterSection, StudentSearchSection } from '@/entities/homebase';

export default function HomeBaseSection() {
  return (
    <div className="flex flex-col gap-10 w-full bg-white px-10 py-5">
      <FilterSection />
      <div className="flex justify-between gap-10 w-full h-[100vh] max-h-[480px] ">
        <div className="w-full max-w-[801px] h-full">
          <Table />
        </div>
        <StudentSearchSection />
      </div>
    </div>
  );
}
