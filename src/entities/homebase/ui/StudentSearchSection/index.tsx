import React, { useState, useCallback, useEffect } from 'react';

import { useStore } from '@/entities/homebase/store/useStore';
import { AddButton, CloseButton, InfoCircleBig } from '@/shared/assets/icons';
import useUser from '@/shared/hooks/useUser';
import { SearchInput } from '@/shared/ui';

import { getUserSearch } from '../../api/getUserSearch';
import StudentApplicationSection from '../StudentApplicationSection';

interface Student {
  id: string;
  name: string;
  email: string;
  gender: string;
  student_info: {
    is_graduate: boolean;
    grade: number;
    classroom: number;
    number: number;
    year: number;
  };
}

export default function StudentSearchSection() {
  const [search, setSearch] = useState('');
  const [filteredStudent, setFilteredStudent] = useState<Student | null>(null);
  const { selectedStudents, addStudent, removeStudent, selectedTableCapacity } = useStore();
  const user = useUser();
  console.log(selectedTableCapacity);
  useEffect(() => {
    if (user) {
      addStudent({
        id: 'user',
        name: user.name,
        email: '',
        gender: '',
        student_info: {
          is_graduate: false,
          grade: Number(user.student_info.grade),
          classroom: Number(user.student_info.classroom),
          number: Number(user.student_info.number),
          year: Number(user.student_info.year),
        },
      });
    }
  }, [user, addStudent]);

  const fetchStudents = useCallback(
    async (query: string) => {
      if (!query.trim()) {
        setFilteredStudent(null);
        return;
      }

      try {
        const response = await getUserSearch({ name: query });
        let students = response.data;
        students = students.filter(
          (student: Student) =>
            user?.name !== student.name &&
            String(user?.stuNum) !==
              `${student.student_info.grade}${student.student_info.classroom}${student.student_info.number.toString().padStart(2, '0')}`
        );

        const notSelectedStudents = students.filter(
          (student: Student) => !selectedStudents.some(selected => selected.id === student.id)
        );

        setFilteredStudent(notSelectedStudents[0] || null);
      } catch (error) {
        console.error('학생 검색 실패:', error);
      }
    },
    [selectedStudents]
  );
  const handleAddStudent = (
    event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    if (filteredStudent) {
      addStudent(filteredStudent);
      setFilteredStudent(null);
    }
  };

  const handleDeleteStudent = (
    event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
    student: Student
  ) => {
    event.stopPropagation();
    removeStudent(student);
  };

  return (
    <div className="flex flex-col w-full max-w-[439px] h-full place-content-between mobile:max-w-none">
      <SearchInput
        placeholder="검색할 학생"
        onDebounce={fetchStudents}
        onChange={e => setSearch(e.target.value)}
        value={search}
        debounceTime={300}
        onClick={() => setSearch('')}
      />
      {filteredStudent || selectedStudents.length > 0 ? (
        <div className="h-full mt-6 flex flex-wrap gap-8 align-start place-content-start">
          {filteredStudent && (
            <div className="w-[calc(50%-16px)] h-9 flex justify-between items-center py-2">
              <span>{`          ${filteredStudent.student_info.grade}${filteredStudent.student_info.classroom}${filteredStudent.student_info.number.toString().padStart(2, '0')}
 ${filteredStudent.name}`}</span>
              <div
                role="button"
                onClick={e => handleAddStudent(e)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleAddStudent(e);
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
                  <span>{`          ${student.student_info.grade}${student.student_info.classroom}${student.student_info.number.toString().padStart(2, '0')}
 ${student.name}`}</span>
                  {student.id !== 'user' && (
                    <div
                      role="button"
                      onClick={e => handleDeleteStudent(e, student)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleDeleteStudent(e, student);
                        }
                      }}
                      tabIndex={0}
                      className="cursor-pointer"
                    >
                      <CloseButton />
                    </div>
                  )}
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
