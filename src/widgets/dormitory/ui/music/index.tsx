import React from 'react';

import MusicFooter from './footer';
import MusicHeader from './header';
import MusicList from './list';

function Music() {
  return (
    <div className="flex flex-1 flex-col self-stretch gap-8 w-full mobile:gap-6">
      <div className="flex flex-1 flex-col gap-6 w-full mobile:gap-4">
        <div className="flex items-center gap-6 mobile:gap-0">
          <MusicHeader />
        </div>
        <div className="h-[352px]">
          <MusicList />
        </div>
      </div>
      <MusicFooter />
    </div>
  );
}

export default Music;
