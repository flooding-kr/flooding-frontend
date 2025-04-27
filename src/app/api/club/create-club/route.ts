import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function POST(request: Request) {
  const body = await request.json();
  const accessToken = cookies().get('accessToken')?.value;
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined;

  try {
    const response = await apiClient.post(`/club`, body, { headers });

    return NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;

    const status = axiosError.response?.status || 500;
    const message = axiosError.response?.data?.message || 'Change failed';

    return NextResponse.json({ error: message }, { status });
  }
}
