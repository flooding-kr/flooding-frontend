import React from 'react';

import MusicFooter from '@/widgets/dormitory/ui/music/footer';
import MusicHeader from '@/widgets/dormitory/ui/music/header';
import MusicList from '@/widgets/dormitory/ui/music/list';

function MusicPage() {
  return (
    <div className="flex justify-center pt-14 px-4">
      <div className="max-w-[1360px] w-full">
        <div className="flex flex-1 flex-col self-stretch gap-8 w-full mobile:gap-6">
          <div className="flex flex-1 flex-col gap-6 w-full mobile:gap-4">
            <div className="flex items-center gap-6 mobile:gap-0">
              <MusicHeader page />
            </div>
            <div className="h-[calc(100dvh-450px)] mobile:h-[400px]">
              <MusicList />
            </div>
          </div>
          <MusicFooter />
        </div>
      </div>
    </div>
  );
}

export default MusicPage;
