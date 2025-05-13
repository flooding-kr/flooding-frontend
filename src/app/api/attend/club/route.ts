import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id') ?? '';
    const date = searchParams.get('date') ?? '';
    const period = searchParams.get('period') ?? '';
    const status = searchParams.get('status') ?? '';

    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    const response = await apiClient.get(`/attend/club/${id}`, {
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
      params: {
        date,
        period,
        status,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      return NextResponse.json(
        { error: error.response?.data || 'User search failed' },
        { status: error.response?.status || 500 }
      );
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = req.json();

    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    const response = await apiClient.post(`/attend/club`, body, {
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      return NextResponse.json(
        { error: error.response?.data || 'post failed' },
        { status: error.response?.status || 500 }
      );
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
