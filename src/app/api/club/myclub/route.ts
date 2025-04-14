import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function GET(request: Request) {
  const accessToken = cookies().get('accessToken')?.value;
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined;

  try {
    const response = await apiClient.get(`/club/myself`, { headers });
    return NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    const status = axiosError.response?.status || 500;
    const message =
      axiosError.response?.data?.message || '내 클럽 정보를 가져오는 데 실패했습니다.';
    return NextResponse.json({ error: message }, { status });
  }
}
