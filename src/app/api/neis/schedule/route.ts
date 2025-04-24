import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');
  const grade = searchParams.get('grade');
  const classroom = searchParams.get('classroom');

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const config = accessToken
    ? {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    : {};

  try {
    const response = await apiClient.get(
      `/neis/timetable?date=${date}&grade=${grade}&classroom=${classroom}`,
      config
    );
    return NextResponse.json(response.data.periods);
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;

    const status = axiosError.response?.status || 500;
    const message = axiosError.response?.data?.message || 'get schedule failed';

    return NextResponse.json({ error: message }, { status });
  }
}
