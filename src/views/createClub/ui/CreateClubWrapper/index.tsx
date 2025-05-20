import React from 'react';

import { CreateClubForm, CreateClubHeader } from '@/widgets/club/ui/createClub';

function CreateClubWrapper() {
  return (
    <div className="max-w-[1360px] w-full flex flex-col gap-12">
      <CreateClubHeader />
      <CreateClubForm />
    </div>
  );
}

export default CreateClubWrapper;
