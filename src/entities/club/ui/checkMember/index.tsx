'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { Check } from '@/shared/assets/icons';
import UserProfileImage from '@/shared/assets/jpg/userProfileImage.jpg';
import { AttendType } from '@/shared/types/attend';

import { useAttendStore } from '../../store';

interface Props {
  id: string;
  name: string;
  grade: number;
  classroom: number;
  number: number;
  profileImg: string;
  status: AttendType;
}

function CheckMember({ name, classroom, grade, number, profileImg, status, id }: Props) {
  const [select, setSelect] = useState(false);
  const { setStudentIds, studentIds } = useAttendStore();
  const onClick = () => {
    setSelect(!select);
    if (studentIds.includes(id)) {
      setStudentIds(studentIds.filter(stuId => !(stuId === id)));
    } else {
      setStudentIds([...studentIds, id]);
    }
  };
  const handleStatus = (attendStatus: AttendType) => {
    let style = '';
    let text = '미출석';
    if (attendStatus === 'PRESENT') {
      text = '출석함';
      style = 'text-main-600';
    } else if (attendStatus === 'ABSENT') {
      style = 'text-error';
    } else if (attendStatus === 'UNMARKED') {
      style = 'text-gray-400';
    }
    return { style, text };
  };
  return (
    <div
      className={`max-w-[317px] w-full h-[68px] flex justify-between items-center p-4 rounded-lg bg-gray-100 ${select && 'border-[1px] border-solid border-success p-[15px]'}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <div
            className={`absolute w-9 h-9 flex justify-center items-center rounded-full ${select && 'bg-[#12121266] border-[1px] border-solid border-success'}`}
          >
            {select && <Check />}
          </div>
          <Image
            src={profileImg || UserProfileImage}
            alt={name}
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="text-body3R text-gray-500">
            {grade}
            {classroom}
            {number.toString().padStart(2, '0')}
          </p>
          <p className="text-body2B text-black">{name}</p>
        </div>
      </div>
      <div className={`flex items-center gap-5 text-body3B ${handleStatus(status).style}`}>
        {handleStatus(status).text}
        <div className="h-6 border-l-[1px] border-solid border-gray-400" />
        <button
          type="button"
          onClick={() => console.log('앙')}
          className="text-gray-400 text-body3B"
        >
          변경
        </button>
      </div>
    </div>
  );
}

export default CheckMember;
