import React from 'react';

import { useStore } from '@/entities/homebase/store/useStore';
import { Button } from '@/shared/ui';

import { postHomebaseData } from '../../api/postHomebasedata';

export default function StudentApplicationSection() {
  const { selectedStudents, floor, period, selectedTable, setSelectedTable } = useStore();

  const isButtonDisabled = !selectedStudents.length || !floor || !period || selectedTable === null;

  const handleApplyClick = async () => {
    if (selectedTable === null || floor === null || period === null || selectedStudents == null) {
      console.error('올바르지 않은 값이 포함되어 있습니다.');
      return;
    }
    const participantIds = selectedStudents
      .filter(student => student.id !== 'user')
      .map(student => student.id);

    try {
      const response = await postHomebaseData({
        table_number: selectedTable,
        floor,
        participants: participantIds,
        period,
      });

      console.log('신청 성공:', response);
      setSelectedTable(null);
    } catch (error) {
      console.error('신청 실패:', error);
    }
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
