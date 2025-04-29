import Image from 'next/image';
import React, { useState } from 'react';

import { ClubMember, SchoolMap } from '@/entities/club';
import { BuildingType, Member } from '@/shared/types/club';

import MapModal from '../mapModal';

interface Props {
  thumbnail: string;
  building: BuildingType;
  floor: number;
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
          <Image
            src={thumbnail}
            alt="썸네일 이미지"
            width={440}
            height={370}
            className="object-cover rounded-lg"
          />
          <div className="w-[564px] h-[370px]">
            <SchoolMap building={building} floor={floor} onClick={() => setModal(true)} />
          </div>
        </section>
        <section className="w-full flex flex-col gap-4">
          <p className="text-body1B text-black">동아리 소개</p>
          <p className="border-t-[1px] border-gray-200 border-solid text-body3R text-gray-800">
            {description}
          </p>
        </section>
        {activity && (
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
            <ClubMember isLeader name={leaderName} profile="" />
            <ClubMember isTeacher name={teacherName} profile="" />
          </div>
          {members && (
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
      {modal && <MapModal building={building} floor={floor} onClose={() => setModal(false)} />}
    </>
  );
}

export default ClubDetailContent;
