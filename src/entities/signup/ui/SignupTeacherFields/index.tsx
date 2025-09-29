'use client';

import React from 'react';
import { Control } from 'react-hook-form';

import { FormType } from '../../model/formType';
import DropdownField from '../DropdownField';

type SignupTeacherFieldsProps = {
  control: Control<FormType>;
};

export default function SignupTeacherFields({ control }: SignupTeacherFieldsProps) {
  return (
    <div className="flex gap-2">
      <DropdownField
        name="department"
        control={control}
        rules={{ required: '부서를 선택해주세요.' }}
        label="부서 선택"
        items={[
          { label: '1학년', value: 'FIRST_GRADE_DEPARTMENT' },
          { label: '2학년', value: 'SECOND_GRADE_DEPARTMENT' },
          { label: '3학년', value: 'THIRD_GRADE_DEPARTMENT' },
          { label: '교육기획', value: 'EDUCATION_PLANNING_DEPARTMENT' },
          { label: '교육연구', value: 'EDUCATION_RESEARCH_DEPARTMENT' },
          { label: '교육과정운영', value: 'CURRICULUM_MANAGEMENT_DEPARTMENT' },
          { label: '창체방과후교육', value: 'AFTER_SCHOOL_EDUCATION_DEPARTMENT' },
          { label: '학생생활안전', value: 'STUDENT_LIFE_SAFE_DEPARTMENT' },
          { label: '마이스터', value: 'MEISTER_DEPARTMENT' },
          { label: '취업진로교육', value: 'EMPLOYMENT_CAREER_DEPARTMENT' },
          { label: '전문교육', value: 'PROFESSIONAL_EDUCATION_DEPARTMENT' },
        ]}
        unit="부"
        showUnit
      />
    </div>
  );
}
