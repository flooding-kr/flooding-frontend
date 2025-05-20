import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

function handleAxiosError(error: unknown) {
  if (error instanceof AxiosError) {
    return NextResponse.json(
      { error: error.response?.data || 'Request failed' },
      { status: error.response?.status || 500 }
    );
  }
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const floor = searchParams.get('floor') ?? '';
    const period = searchParams.get('period') ?? '';

    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    const response = await apiClient.get('/homebase/myself', {
      params: { floor, period },
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return handleAxiosError(error);
  }
}
