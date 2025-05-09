import React from 'react';

import ReservationList from '../reservationList';
import MassageFooter from './footer';
import MassageHeader from './header';

function Massage() {
  return (
    <div className="flex flex-1 flex-col self-stretch gap-8 w-full">
      <div className="flex flex-1 flex-col self-stretch gap-6 w-full">
        <MassageHeader />
        <ReservationList type="massage" />
      </div>
      <MassageFooter />
    </div>
  );
}

export default Massage;
