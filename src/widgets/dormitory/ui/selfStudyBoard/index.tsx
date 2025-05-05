import React from 'react';

import SelfStudyFooter from './footer';
import SelfStudyHeader from './header';
import ReservationList from '../reservationList';

function SelfStudy() {
  return (
    <div className="flex flex-1 flex-col self-stretch gap-8 w-full">
      <SelfStudyHeader />
      <ReservationList type="selfStudy" />
      <SelfStudyFooter />
    </div>
  );
}

export default SelfStudy;
