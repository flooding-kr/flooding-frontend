'use client';

import { useState } from 'react';

import { Button, Input } from '@/shared/ui';

function MusicFooter() {
  const [url, setUrl] = useState('');
  const youtubeReg = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}/;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = () => {
    if (!youtubeReg.test(url)) {
      alert('유효한 YouTube 링크를 입력해주세요.');
      return;
    }

    console.log('등록된 URL:', url);
  };

  return (
    <footer className="w-full flex items-center gap-6">
      <Input placeholder="URL을 입력해주세요" value={url} onChange={handleChange} />
      <div className="w-[390px]">
        <Button text="등록하기" type="button" onClick={handleSubmit} />
      </div>
    </footer>
  );
}

export default MusicFooter;
