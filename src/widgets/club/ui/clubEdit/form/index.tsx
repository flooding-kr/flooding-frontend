'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { ImageUploader } from '@/entities/club';
import { ClubDetail } from '@/shared/types/club';
import { Button, Dropdown, Input, TextArea } from '@/shared/ui';
import useEditClubForm from '@/widgets/club/model/useEditClubForm';

import CreateClubPreviewImageList from './imageList';

interface Props {
  clubData: ClubDetail;
}

function EditClubForm({ clubData }: Props) {
  const { handleSubmit, register } = useForm();

  const {
    onSubmit,
    profileImage,
    images,
    type,
    setType,
    view,
    setView,
    floor,
    setFloor,
    classroom,
    floorDropdownKey,
    roomDropdownKey,
    setRoom,
    description,
    name,
    setDescription,
    setName,
  } = useEditClubForm({ clubData });

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
          <Input
            {...register('name')}
            placeholder="동아리 이름을 입력해주세요"
            maxLength={20}
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-body2B text-black">
            동아리 유형<span className="text-main-600">*</span>
          </p>
          <Dropdown
            items={['전공동아리', '자율동아리', '취업동아리']}
            text="유형"
            onChange={setType}
            value={type}
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-body2B text-black">동아리 소개글</p>
        <TextArea
          {...register('description')}
          placeholder="동아리 소개를 입력해주세요"
          maxLength={400}
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-body2B text-black">동아리 활동사진</p>
        <div className="flex gap-6">
          {images?.length > 0 && (
            <CreateClubPreviewImageList
              images={images.map((item: { presigned_url: string }) => item.presigned_url)}
            />
          )}
          {images?.length < 4 && <ImageUploader />}
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <p className="text-body2B text-black">동아리 위치</p>
        <div className="w-full flex justify-between gap-8">
          <Dropdown
            items={['금봉관', '본관', '동행관']}
            text="건물"
            onChange={setView}
            value={view}
          />
          <Dropdown
            key={`floor-${floorDropdownKey}`}
            items={view === '동행관' ? [1, 2] : [1, 2, 3, 4]}
            text="층수"
            unit="층"
            onChange={e => setFloor(Number(e))}
            value={floor ?? 0}
          />
          <Dropdown
            key={`room-${roomDropdownKey}`}
            items={classroomNames}
            text="실"
            onChange={selectedName => {
              const selected = classroom.find((cls: { name: string }) => cls.name === selectedName);
              if (selected) setRoom(selected.id);
            }}
            value={
              classroom.find((cls: { id: number }) => cls.id === clubData.classroom.id)?.name ?? ''
            }
          />
        </div>
      </section>
      <Button text="수정" type="submit" />
    </form>
  );
}

export default EditClubForm;
