import axios from 'axios';

interface SignUpData {
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
}

export const postSignup = async (data: SignUpData) => {
  const { role, checkbox, ...rest } = data;

  const endpoint = role === 'STUDENT' ? '/api/auth/student/sign-up' : '/api/auth/teacher/sign-up';

  const payload =
    role === 'STUDENT'
      ? {
          email: rest.email,
          password: rest.password,
          name: rest.name,
          gender: rest.gender,
          year: rest.year,
          classroom: rest.classroom,
          number: rest.number,
        }
      : {
          email: rest.email,
          password: rest.password,
          name: rest.name,
          gender: rest.gender,
        };

  return axios.post(endpoint, payload);
};
