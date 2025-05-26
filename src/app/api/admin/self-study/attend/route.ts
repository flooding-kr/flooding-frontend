import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url);

  const accessToken = cookies().get('accessToken')?.value;
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined;

  const id = searchParams.get('id') ?? '';

  try {
    const response = await apiClient.patch(`/admin/self-study/${id}/attend`, {}, { headers });
    return NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError<{ reason: string }>;

    const status = axiosError.response?.status || 500;
    const message = axiosError.response?.data?.reason || 'patch failed';

    return NextResponse.json({ error: message }, { status });
  }
}
