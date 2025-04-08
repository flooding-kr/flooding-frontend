'use client';

import React, { useEffect, useState } from 'react';

import { ImageUploader, useImageStore } from '@/entities/club';
import { Button, Dropdown, Input, TextArea } from '@/shared/ui';

import CreateClubPreviewImageList from './imageList';

function CreateClubForm() {
  const { profileImage, images } = useImageStore();
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [c, setC] = useState('금봉관');

  useEffect(() => {
    console.log(a);
    console.log(b);
    console.log(c);
  }, [c]);

  return (
    <form className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <p className="text-body2B text-black">
          동아리 대표 사진<span className="text-main-600">*</span>
        </p>
        {!profileImage ? (
          <ImageUploader isProfile />
        ) : (
          <CreateClubPreviewImageList profileImage={profileImage} />
        )}
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-body2B text-black">
          동아리 이름<span className="text-main-600">*</span>
        </p>
        <Input placeholder="동아리 이름을 입력해주세요" maxLength={20} />
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-body2B text-black">동아리 소개글</p>
        <TextArea placeholder="동아리 이름을 입력해주세요" maxLength={400} />
      </section>
      <section className="flex flex-col gap-4">
        <header>
          <p className="text-body2B text-black">동아리 활동사진</p>
        </header>
        <div className="flex gap-6">
          {images.length > 0 && <CreateClubPreviewImageList images={images} />}
          {images.length < 4 && <ImageUploader />}
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <p className="text-body2B text-black">동아리 위치</p>
        <div className="w-full flex justify-between gap-8">
          <Dropdown items={['금봉관', '본관', '동행관']} text="건물" onChange={e => setC(e)} />
          <Dropdown items={[1, 2, 3, 4]} text="층수" unit="층" onChange={e => setB(e)} />
          <Dropdown items={[1, 2, 3, 4]} text="실" unit="반" onChange={e => setA(e)} />
        </div>
      </section>
      <Button text="다음" type="submit" />
    </form>
  );
}

export default CreateClubForm;
