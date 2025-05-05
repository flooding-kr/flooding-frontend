import React from 'react';

import MusicItem from '@/entities/dormitory/ui/MusicItem';

function MusicList() {
  return (
    <div className="w-[1360px] h-[352px] text- bg-white flex flew-1 flex-col px-7 py-6 rounded-lg overflow-y-auto custom-scrollbar tablet:w-full">
      <div className="w-full flex flex-wrap justify-between gap-y-7 tablet:gap-0 tablet:flex-col">
        <MusicItem applicant="김진원" likeCount={29} likeState={false} musicImg="" title="노래" />
        <MusicItem applicant="김진원" likeCount={29} likeState={false} musicImg="" title="노래" />
        <MusicItem applicant="김진원" likeCount={29} likeState={false} musicImg="" title="노래" />
        <MusicItem applicant="김진원" likeCount={29} likeState={false} musicImg="" title="노래" />
        <MusicItem applicant="김진원" likeCount={29} likeState={false} musicImg="" title="노래" />
        <MusicItem applicant="김진원" likeCount={29} likeState={false} musicImg="" title="노래" />
        <MusicItem applicant="김진원" likeCount={29} likeState={false} musicImg="" title="노래" />
      </div>
    </div>
  );
}
export default MusicList;
