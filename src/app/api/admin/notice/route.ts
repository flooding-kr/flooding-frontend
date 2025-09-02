import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function POST(request: Request) {
  const body = await request.json();
  const accessToken = cookies().get('accessToken')?.value;
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined;

  try {
    const response = await apiClient.post(`/admin/notice`, body, { headers });
    return NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError<{ reason: string }>;

    const status = axiosError.response?.status || 500;
    const message = axiosError.response?.data?.reason || 'post failed';

    return NextResponse.json({ error: message }, { status });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const accessToken = cookies().get('accessToken')?.value;
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined;

  try {
    const response = await apiClient.delete(`/admin/notice/${id}`, { headers });
    return NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError<{ reason: string }>;

    const status = axiosError.response?.status || 500;
    const message = axiosError.response?.data?.reason || 'delete failed';

    return NextResponse.json({ error: message }, { status });
  }
}
