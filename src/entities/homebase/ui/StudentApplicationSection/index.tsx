import React from 'react';

import { useStore } from '@/entities/homebase/store/useStore';
import { Button } from '@/shared/ui';

export default function StudentApplicationSection() {
  const { selectedStudents, floor, classTime, selectedTable } = useStore();

  const isButtonDisabled =
    !selectedStudents.length || !floor || !classTime || selectedTable === null;

  const handleApplyClick = () => {
    // eslint-disable-next-line no-console
    console.log(`${floor} ${classTime} 테이블 ${selectedTable} `, selectedStudents);
  };

  return (
    <div>
      <div className="flex gap-2 float-end mb-5">
        <p className="text-body2R text-gray-500">총 인원</p>
        <p className="text-body2B text-main-600">{selectedStudents.length}명</p>
      </div>
      <Button
        type="button"
        text="신청하기"
        onClick={handleApplyClick}
        disabled={isButtonDisabled}
      />
    </div>
  );
}
