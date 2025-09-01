import Image from 'next/image';
import { useState } from 'react';

import { ClubMember, SchoolMap } from '@/entities/club';
import userProfileImg from '@/shared/assets/jpg/userProfileImage.jpg';
import { BuildingType, Member } from '@/shared/types/club';

import MapModal from '../mapModal';

interface Props {
  thumbnail: string;
  building: BuildingType;
  floor: number;
  room: string;
  description: string;
  activity: string[];
  leaderName: string;
  teacherName: string;
  members: Member[];
}

function ClubDetailContent({
  thumbnail,
  building,
  floor,
  room,
  description,
  activity,
  leaderName,
  members,
  teacherName,
}: Props) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <section className="max-w-[1040px] flex flex-col gap-12">
        <section className="flex gap-9">
          <div className="relative w-[440px] h-[370px]">
            <Image src={thumbnail} alt="썸네일 이미지" fill className="object-contain rounded-lg" />
          </div>
          <div className="w-[564px] h-[370px]">
            <SchoolMap
              building={building}
              floor={floor}
              room={room}
              onClick={() => setModal(true)}
            />
          </div>
        </section>
        {description && (
          <section className="w-full flex flex-col gap-4">
            <p className="text-body1B text-black">동아리 소개</p>
            <p className="border-t-[1px] border-gray-200 border-solid text-body3R text-gray-800">
              {description}
            </p>
          </section>
        )}
        {activity.length > 0 && (
          <section className="flex flex-col gap-6">
            <p className="text-body1B text-black">동아리 활동사진</p>
            {activity.map((src, idx) => (
              <Image
                key={src}
                src={src}
                alt={`활동사진 ${idx}`}
                width={244}
                height={200}
                className="object-cover"
              />
            ))}
          </section>
        )}
        <section className="flex flex-col gap-6">
          <p className="text-body1B text-black">동아리 인원</p>
          <div className="flex gap-5">
            <ClubMember isLeader name={leaderName} profile={userProfileImg.src} />
            {teacherName && (
              <ClubMember isTeacher name={teacherName} profile={userProfileImg.src} />
            )}
          </div>
          {members.length > 0 && (
            <>
              <hr />
              <div className="grid grid-rows-5 gap-x-4 gap-y-3">
                {members.map(item => (
                  <ClubMember
                    key={item.id}
                    name={item.name}
                    profile=""
                    number={`${10 - item.student_info.year}${item.student_info.classroom}${item.student_info.number.toString().padStart(2, '0')}`}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      </section>
      {modal && (
        <MapModal building={building} floor={floor} room={room} onClose={() => setModal(false)} />
      )}
    </>
  );
}

export default ClubDetailContent;
