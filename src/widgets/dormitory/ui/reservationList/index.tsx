import React from 'react';

import StudentItem from '@/entities/dormitory/ui/StudentItem';

interface Props {
  type: 'selfStudy' | 'massage';
}

function ReservationList({ type }: Props) {
  const mock = [
    {
      student_number: '20230004',
      name: '최민정',
      profile_image_url: '',
    },
  ];

  return (
    <div
      className={`w-[1360px] bg-white flex flew-1 flex-col px-7 py-6 rounded-lg overflow-y-auto custom-scrollbar pr-2 tablet:w-full ${type === 'selfStudy' ? 'h-[498px]' : 'h-[182px]'}`}
    >
      <div className="w-full flex flex-wrap gap-x-7 gap-y-6 mx-auto">
        {mock.map((item, idx) => (
          <StudentItem
            type={type}
            key={item.student_number}
            stuImg={item.profile_image_url}
            stuName={item.name}
            stuNum={item.student_number}
            rank={idx + 1}
          />
        ))}
      </div>
    </div>
  );
}
export default ReservationList;
