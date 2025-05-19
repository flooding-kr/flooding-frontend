export type FormType = {
  name: string;
  email: string;
  role: 'STUDENT' | 'TEACHER';
  password: string;
  gender: 'MALE' | 'FEMALE';
  checkbox: boolean;
  // 학생 전용
  year?: number;
  classroom?: number;
  number?: number;
};
