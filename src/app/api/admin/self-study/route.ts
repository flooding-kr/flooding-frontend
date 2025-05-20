import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function PATCH(request: Request) {
  const body = request.json();

  const accessToken = cookies().get('accessToken')?.value;
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined;

  try {
    const response = await apiClient.patch(`/admin/self-study/limit`, body, { headers });
    return NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError<{ reason: string }>;

    const status = axiosError.response?.status || 500;
    const message = axiosError.response?.data?.reason || 'patch failed';

    return NextResponse.json({ error: message }, { status });
  }
}
