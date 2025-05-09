import React from 'react';

import MusicFooter from './footer';
import MusicHeader from './header';
import MusicList from './list';

function Music() {
  return (
    <div className="flex flex-1 flex-col self-stretch gap-8 w-full">
      <MusicHeader />
      <MusicList />
      <MusicFooter />
    </div>
  );
}

export default Music;
