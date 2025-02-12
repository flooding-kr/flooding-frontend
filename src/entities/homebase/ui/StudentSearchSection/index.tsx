import React, { useState } from 'react';

import { useStore } from '@/entities/homebase/store/useStore';
import { AddButton, CloseButton, InfoCircleBig } from '@/shared/assets/icons';
import { SearchInput } from '@/shared/ui';

import StudentApplicationSection from '../StudentApplicationSection';

const students = [
  { id: 3308, name: '민우석' },
  { id: 3413, name: '이현준' },
  { id: 3301, name: '김동학' },
  { id: 3417, name: '한재형' },
  { id: 3405, name: '김진원' },
  { id: 3112, name: '이성민' },
];

export default function StudentSearchSection() {
  const [search, setSearch] = useState('');
  const { selectedStudents, addStudent, removeStudent } = useStore();

  const filteredStudents = students.filter(
    student =>
      (student.name.includes(search) || student.id.toString().includes(search)) &&
      !selectedStudents.some(selectedStudent => selectedStudent.id === student.id)
  );

  const handleAddStudent = (student: (typeof students)[0]) => {
    setSearch('');
    addStudent(student);
  };

  const handleDeleteStudent = (student: (typeof students)[0]) => {
    removeStudent(student);
  };

  return (
    <div className="flex flex-col w-full max-w-[439px] h-full place-content-between">
      <SearchInput
        placeholder="검색할 학생"
        onChange={e => setSearch(e.target.value)}
        onDebounce={value => {
          // eslint-disable-next-line no-console
          console.log(`검색:${value}`);
        }}
        value={search}
        debounceTime={300}
      />
      {(search && filteredStudents.length) || selectedStudents.length > 0 ? (
        <div className="h-full mt-6 flex flex-wrap gap-8 align-start place-content-start">
          {search && filteredStudents.length > 0 && (
            <div className="w-[calc(50%-16px)] h-9 flex justify-between items-center py-2">
              <span>{`${filteredStudents[0].id} ${filteredStudents[0].name}`}</span>
              <div
                key={filteredStudents[0].id}
                role="button"
                onClick={() => handleAddStudent(filteredStudents[0])}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleAddStudent(filteredStudents[0]);
                  }
                }}
                tabIndex={0}
                className="cursor-pointer"
              >
                <AddButton />
              </div>
            </div>
          )}
          {selectedStudents.length > 0 &&
            selectedStudents
              .slice()
              .reverse()
              .map(student => (
                <div
                  key={student.id}
                  className="w-[calc(50%-16px)] h-9 flex justify-between items-center py-2"
                >
                  <span>{`${student.id} ${student.name}`}</span>
                  <div
                    key={student.id}
                    role="button"
                    onClick={() => handleDeleteStudent(student)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleAddStudent(filteredStudents[0]);
                      }
                    }}
                    tabIndex={0}
                    className="cursor-pointer"
                  >
                    <CloseButton />
                  </div>
                </div>
              ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center">
          <InfoCircleBig />
          <p className="text-body2R text-gray-300">검색해서 학생을 추가해서 신청해주세요!</p>
        </div>
      )}
      <StudentApplicationSection />
    </div>
  );
}
