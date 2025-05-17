import React, { useEffect } from 'react';

import ReservationList from '../reservationList';
import MassageFooter from './footer';
import MassageHeader from './header';
import { useFetchMassageList } from '../../model/useFetchMassageList';

function Massage() {
  const { massage, fetchMassage } = useFetchMassageList();

  useEffect(() => {
    fetchMassage();
  }, []);
  return (
    <div className="flex flex-1 flex-col self-stretch gap-8 w-full mobile:gap-6">
      <div className="flex flex-1 flex-col self-stretch gap-6 w-full mobile:gap-4">
        <MassageHeader />
        <ReservationList type="massage" data={massage} />
      </div>
      <MassageFooter />
    </div>
  );
}

export default Massage;
