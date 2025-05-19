import React, { useEffect } from 'react';

import { useFetchMassage } from '@/widgets/home/model/useFetchMassage';

import ReservationList from '../reservationList';
import MassageFooter from './footer';
import MassageHeader from './header';
import { useFetchMassageList } from '../../model/useFetchMassageList';

function Massage() {
  const { massage, fetchMassage } = useFetchMassage();
  const { massageList, fetchMassageList } = useFetchMassageList();

  useEffect(() => {
    fetchMassage();
    fetchMassageList();
  }, []);

  return (
    <div className="flex flex-1 flex-col self-stretch gap-8 w-full mobile:gap-6">
      <div className="flex flex-1 flex-col self-stretch gap-6 w-full mobile:gap-4">
        <MassageHeader />
        <ReservationList type="massage" data={massageList} />
      </div>
      <MassageFooter
        activationTime="20:20"
        available={massage?.is_available || false}
        count={massage?.current_count || 0}
        maxCount={massage?.limit || 0}
      />
    </div>
  );
}

export default Massage;
