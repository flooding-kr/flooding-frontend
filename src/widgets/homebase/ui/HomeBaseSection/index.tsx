'use client';

import React, { useEffect, useState } from 'react';

import { Table, FilterSection, StudentSearchSection } from '@/entities/homebase';
import { useStore } from '@/entities/homebase/store/useStore';
import { Button } from '@/shared/ui';
import { Modal } from '@/shared/ui/modal';

export default function HomeBaseSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedTable } = useStore();
  const [buttonText, setButtonText] = useState('지도보기');

  useEffect(() => {
    if (selectedTable) {
      setButtonText(`테이블 ${selectedTable} 선택`);
    } else {
      setButtonText('지도보기');
    }
  }, [selectedTable]);

  return (
    <div className="flex flex-col gap-10 w-full h-full max-h-[602px] bg-white px-10 py-5 mobile:gap-6 mobile:px-5">
      <FilterSection />
      <div className="flex justify-between gap-10 w-full h-[100vh] max-h-[480px] mobile:justify-center mobile:flex-col">
        {/* PC */}
        <div className="w-full max-w-[801px] h-full mobile:hidden">
          <Table />
        </div>

        {/* Moblie */}
        <div className="hidden mobile:block">
          <Button text={buttonText} onClick={() => setIsModalOpen(true)} homebasemobile />
        </div>

        <StudentSearchSection />
      </div>

      {isModalOpen && (
        <div className="hidden mobile:block">
          <Modal name="홈베이스 지도" onClose={() => setIsModalOpen(false)}>
            <div className="flex justify-between gap-10 w-full h-[100vh] max-h-[480px] mobile:justify-center mobile:flex-col ">
              <div className="w-full max-w-[801px] h-full ">
                <Table />
              </div>
              <Button text="확인" onClick={() => setIsModalOpen(false)} />
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
}
