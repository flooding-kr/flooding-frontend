import React, { useEffect } from 'react';

import { useFetchSelfStudy } from '@/widgets/home/model/useFetchSelfStudy';

import SelfStudyFooter from './footer';
import SelfStudyHeader from './header';
import { useFetchSelfStudyList } from '../../model/useFetchSelfStudyList';
import ReservationList from '../reservationList';

function SelfStudy() {
  const { selfStudy, fetchSelfStudy } = useFetchSelfStudy();
  const { selfStudyList, fetchSelfStudyList } = useFetchSelfStudyList();

  useEffect(() => {
    fetchSelfStudy();
    fetchSelfStudyList();
  }, []);

  return (
    <div className="flex flex-1 flex-col self-stretch gap-8 w-full mobile:gap-6">
      <div className="flex flex-1 flex-col self-stretch gap-6 w-full mobile:gap-4">
        <SelfStudyHeader />
        <ReservationList type="selfStudy" data={selfStudyList} />
      </div>
      <SelfStudyFooter
        activationTime="20:00"
        available={selfStudy?.status || 'IMPOSSIBLE'}
        count={selfStudy?.current_count || 0}
        maxCount={selfStudy?.limit || 0}
      />
    </div>
  );
}

export default SelfStudy;
