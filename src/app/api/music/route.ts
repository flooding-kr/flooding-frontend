import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date') ?? '';
  const type = searchParams.get('type') ?? '';

  const accessToken = cookies().get('accessToken')?.value;
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined;

  try {
    const response = await apiClient.get(`/music?date=${date}&orderType=${type}`, { headers });
    return NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError<{ reason: string }>;

    const status = axiosError.response?.status || 500;
    const message = axiosError.response?.data?.reason || 'get failed';

    return NextResponse.json({ error: message }, { status });
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  const accessToken = cookies().get('accessToken')?.value;
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined;

  try {
    console.log(body.music_url);
    const response = await apiClient.post(`/music`, body, { headers });
    return NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError<{ reason: string }>;

    const status = axiosError.response?.status;
    const message = axiosError.response?.data?.reason;

    return NextResponse.json({ error: message }, { status });
  }
}

export async function DELETE() {
  const accessToken = cookies().get('accessToken')?.value;
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined;

  try {
    const response = await apiClient.delete(`/music`, { headers });
    return NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError<{ reason: string }>;

    const status = axiosError.response?.status || 500;
    const message = axiosError.response?.data?.reason || 'delete failed';

    return NextResponse.json({ error: message }, { status });
  }
}
