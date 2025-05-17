import React, { useEffect } from 'react';

import SelfStudyFooter from './footer';
import SelfStudyHeader from './header';
import { useFetchSelfStudyList } from '../../model/useFetchSelfStudyList';
import ReservationList from '../reservationList';

function SelfStudy() {
  const { selfStudy, fetchSelfStudy } = useFetchSelfStudyList();

  useEffect(() => {
    fetchSelfStudy();
  }, []);
  return (
    <div className="flex flex-1 flex-col self-stretch gap-8 w-full mobile:gap-6">
      <div className="flex flex-1 flex-col self-stretch gap-6 w-full mobile:gap-4">
        <SelfStudyHeader />
        <ReservationList type="selfStudy" data={selfStudy} />
      </div>
      <SelfStudyFooter />
    </div>
  );
}

export default SelfStudy;
