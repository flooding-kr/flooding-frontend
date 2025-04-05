import React from 'react';

import { AddButton } from '@/shared/assets/icons';

function CreateClubButton() {
  return (
    <button type="button" className="bg-main-100 rounded-lg px-5 py-4 hover:bg-main-200">
      <div className="flex gap-3">
        <AddButton color="#5E7EF3" />
        <p className="text-main-600 text-body2R">동아리 개설하기</p>
      </div>
    </button>
  );
}

export default CreateClubButton;
