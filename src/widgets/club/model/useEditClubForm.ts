'use client';

import { useEffect, useState } from 'react';

import { useImageStore } from '@/entities/club';
import { ClubDetail } from '@/shared/types/club';

import { useClassroom } from './useClassroom';
import useEdit from './useEdit';

const buildingMap: Record<string, string> = {
  금봉관: 'AUDITORIUM',
  본관: 'MAIN_BUILDING',
  동행관: 'DORMITORY',
};

const viewMap: Record<string, string> = {
  AUDITORIUM: '금봉관',
  MAIN_BUILDING: '본관',
  DORMITORY: '동행관',
};

interface Props {
  clubData: ClubDetail;
}

function useEditClubForm({ clubData }: Props) {
  const { profileImage, images, setImages, setProfileImage } = useImageStore();
  const { mutate: patchClubForm } = useEdit();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');
  const [type, setType] = useState('전공동아리');
  const [view, setView] = useState('');
  const [building, setBuilding] = useState('');
  const [floor, setFloor] = useState<number | null>(0);
  const [room, setRoom] = useState<number | null>(null);
  const [floorDropdownKey, setFloorDropdownKey] = useState(0);
  const [roomDropdownKey, setRoomDropdownKey] = useState(0);

  const { classroom, fetchClassroom } = useClassroom({ building, floor });

  useEffect(() => {
    if (clubData?.type === 'CAREER') {
      setType('취업동아리');
    } else if (clubData?.type === 'AUTONOMOUS') {
      setType('자율동아리');
    } else {
      setType('전공동아리');
    }
    setId(clubData?.id);
    setFloor(clubData?.classroom.floor);
    setBuilding(clubData?.classroom.building_type);
    setView(viewMap[clubData?.classroom.building_type]);
    setRoom(clubData?.classroom.id);
    setName(clubData?.name);
    setDescription(clubData?.description);
    setImages(clubData?.activity_images);
    setProfileImage(clubData?.thumbnail_image);
  }, [clubData]);

  useEffect(() => {
    setBuilding(buildingMap[view] || '');
  }, [view]);

  useEffect(() => {
    if (building && floor) fetchClassroom();
    if (building === 'DORMITORY') setFloorDropdownKey(pre => pre + 1);
    setRoom(null);
    setRoomDropdownKey(pre => pre + 1);
  }, [building, floor]);

  const onSubmit = () => {
    let clubType: 'MAJOR' | 'AUTONOMOUS' | 'CAREER' = 'MAJOR';
    if (type === '자율동아리') clubType = 'AUTONOMOUS';
    else if (type === '취업동아리') clubType = 'CAREER';
    if (profileImage) {
      patchClubForm({
        name,
        description,
        type: clubType,
        thumbnail_image_key: profileImage.key,
        activity_image_keys: images.map(item => item.key),
        classroom_id: room || 0,
        id,
      });
    }
  };

  return {
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
    name,
    description,
    setName,
    setDescription,
    setBuilding,
    building,
  };
}

export default useEditClubForm;
