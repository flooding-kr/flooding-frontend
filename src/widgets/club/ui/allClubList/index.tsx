import React from 'react';

import AllClubListHeader from './header';
import { mock } from '../../data/mockClub';
import ClubList from '../clubList';

function AllClubList() {
  return (
    <div className="flex flex-col gap-[24px]">
      <AllClubListHeader />
      <ClubList clubs={mock} />
    </div>
  );
}

export default AllClubList;
