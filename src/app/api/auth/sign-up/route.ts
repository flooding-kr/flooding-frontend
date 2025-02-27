import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const response = await apiClient.post('/auth/sign-up', body);
    return NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;

    const status = axiosError.response?.status || 500;
    const message = axiosError.response?.data?.message || 'Signun failed';

    return NextResponse.json({ error: message }, { status });
  }
}
