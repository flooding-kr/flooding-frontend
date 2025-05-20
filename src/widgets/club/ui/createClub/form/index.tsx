'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ImageUploader, useImageStore } from '@/entities/club';
import { Button, Dropdown, Input, TextArea } from '@/shared/ui';
import { useClassroom } from '@/widgets/club/model/useClassroom';
import useClubForm from '@/widgets/club/model/useClubForm';

import CreateClubPreviewImageList from './imageList';

const buildingMap: Record<string, string> = {
  금봉관: 'AUDITORIUM',
  본관: 'MAIN_BUILDING',
  동행관: 'DORMITORY',
};

function CreateClubForm() {
  const { handleSubmit, register } = useForm();
  const { profileImage, images } = useImageStore();
  const { mutate: postClubForm } = useClubForm();

  const [type, setType] = useState('전공동아리');
  const [view, setView] = useState('');
  const [building, setBuilding] = useState('');
  const [floor, setFloor] = useState<number | null>(null);
  const [room, setRoom] = useState<number | null>(null);
  const [floorDropdownKey, setFloorDropdownKey] = useState(0);
  const [roomDropdownKey, setRoomDropdownKey] = useState(0);

  const { classroom, fetchClassroom } = useClassroom({ building, floor });

  const onSubmit = (data: any) => {
    let clubType;
    if (type === '전공동아리') clubType = 'MAJOR';
    else if (type === '자율동아리') clubType = 'AUTONOMOUS';
    else if (type === '취업동아리') clubType = 'CAREER';
    postClubForm({
      ...data,
      type: clubType,
      thumbnail_image_key: profileImage?.key,
      activity_image_keys: images.map(item => item.key),
      classroom_id: room,
    });
  };

  useEffect(() => {
    setBuilding(buildingMap[view] || '');
  }, [view]);

  useEffect(() => {
    if (building && floor) fetchClassroom();
    if (building === 'DORMITORY') setFloorDropdownKey(pre => pre + 1);
    setRoom(null);
    setRoomDropdownKey(pre => pre + 1);
  }, [building, floor]);

  const classroomNames = Array.isArray(classroom) ? classroom.map(cls => cls.name) : [];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <p className="text-body2B text-black">
          동아리 대표 사진<span className="text-main-600">*</span>
        </p>
        {profileImage ? (
          <CreateClubPreviewImageList profileImage={profileImage.presigned_url} />
        ) : (
          <ImageUploader isProfile />
        )}
      </section>
      <section className="flex justify-between gap-4">
        <div className="w-full flex flex-col gap-4">
          <p className="text-body2B text-black">
            동아리 이름<span className="text-main-600">*</span>
          </p>
          <Input {...register('name')} placeholder="동아리 이름을 입력해주세요" maxLength={20} />
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-body2B text-black">
            동아리 유형<span className="text-main-600">*</span>
          </p>
          <Dropdown
            items={['전공동아리', '자율동아리', '취업동아리']}
            text="유형"
            onChange={setType}
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-body2B text-black">동아리 소개글</p>
        <TextArea
          {...register('description')}
          placeholder="동아리 소개를 입력해주세요"
          maxLength={400}
        />
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-body2B text-black">동아리 활동사진</p>
        <div className="flex gap-6">
          {images.length > 0 && (
            <CreateClubPreviewImageList images={images.map(item => item.presigned_url)} />
          )}
          {images.length < 4 && <ImageUploader />}
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <p className="text-body2B text-black">동아리 위치</p>
        <div className="w-full flex justify-between gap-8">
          <Dropdown items={['금봉관', '본관', '동행관']} text="건물" onChange={setView} />
          <Dropdown
            key={`floor-${floorDropdownKey}`}
            items={view === '동행관' ? [1, 2] : [1, 2, 3, 4]}
            text="층수"
            unit="층"
            onChange={setFloor}
          />
          <Dropdown
            key={`room-${roomDropdownKey}`}
            items={classroomNames}
            text="실"
            onChange={selectedName => {
              const selected = classroom.find(cls => cls.name === selectedName);
              if (selected) setRoom(selected.id);
            }}
          />
        </div>
      </section>
      <Button text="다음" type="submit" />
    </form>
  );
}

export default CreateClubForm;
