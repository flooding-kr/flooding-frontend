'use client';

import { useState } from 'react';

import { showError } from '@/shared/libs/showError';
import { Button, Input } from '@/shared/ui';
import useDispatchMusic from '@/widgets/dormitory/model/useDispatchMusic';

function MusicFooter() {
  const youtubeReg = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}/;
  const [url, setUrl] = useState('');
  const { isPending, mutate } = useDispatchMusic({ music: url });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = () => {
    if (!youtubeReg.test(url)) {
      showError('유효한 YouTube 링크를 입력해주세요.');
      return;
    }

    mutate();
  };

  return (
    <footer>
      <form
        action={handleSubmit}
        className="w-full flex items-center gap-6 mobile:flex-col mobile:gap-4"
      >
        <Input placeholder="URL을 입력해주세요" value={url} onChange={handleChange} />
        <div className="w-[390px] mobile:w-full">
          <Button text="등록하기" type="button" onClick={handleSubmit} disabled={isPending} />
        </div>
      </form>
    </footer>
  );
}

export default MusicFooter;
