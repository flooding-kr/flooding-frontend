'use client';

import React, { useState } from 'react';

import { Button, Input, TextArea } from '@/shared/ui';
import useDispatchNotify from '@/views/notification/model/useDispatchNotify';

function NotificationWrite() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { mutate } = useDispatchNotify({ title, description });

  return (
    <div className="flex justify-center pt-[51px]">
      <div className="max-w-[1360px] w-full flex flex-col gap-[284px]">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-4">
            <p className="text-body2B text-black mobile:text-body3B">
              공지 제목<span className="text-main-600">*</span>
            </p>
            <Input
              maxLength={20}
              placeholder="제목을 작성해주세요"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-body2B text-black mobile:text-body3B">
              공지 제목<span className="text-main-600">*</span>
            </p>
            <TextArea
              maxLength={200}
              placeholder="제목을 작성해주세요"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
        </div>
        <Button text="확인" disabled={!title || !description} onClick={() => mutate()} />
      </div>
    </div>
  );
}

export default NotificationWrite;
