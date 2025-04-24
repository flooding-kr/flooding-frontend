import React from 'react';
import { toast } from 'react-toastify';

import { useStore } from '@/entities/homebase/store/useStore';
import { Button, Input } from '@/shared/ui';

import { postHomebaseData } from '../../api/postHomebasedata';

export default function StudentApplicationSection() {
  const { selectedStudents, floor, period, reason, selectedTable, setSelectedTable, setReason } =
    useStore();

  const isButtonDisabled =
    !selectedStudents.length || !floor || !period || !selectedTable || !reason;

  const handleApplyClick = async () => {
    if (
      selectedTable === null ||
      floor === null ||
      period === null ||
      selectedStudents == null ||
      reason == null
    ) {
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
        reason,
      });
      setReason('');
      toast.success('신청이 완료 되었습니다.');
      setSelectedTable(null);
    } catch (error: any) {
      toast.error(error.response?.data?.error?.reason || '신청 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <Input
        placeholder="홈베이스 사유를 작성해주세요"
        maxLength={20}
        bg
        onChange={e => setReason(e.target.value)}
        value={reason || ''}
      />
      <div className="flex gap-2 float-end mb-5 mt-2">
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
